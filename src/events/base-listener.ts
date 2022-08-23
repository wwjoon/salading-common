import { Message, Stan } from 'node-nats-streaming';
import { Subjects } from './subjects';
import { QueueGroupName } from '../index';

interface Event {
  subject: Subjects;
  data: any;
}
import axios, { AxiosResponse } from 'axios';

export interface CustomMessage extends Message {
  queueGroupName: QueueGroupName;
  parentId: string;
  subject: Subjects;
  fail(err: Error, allowedFails: number): Promise<void>;
}

export abstract class Listener<T extends Event> {
  abstract subject: T['subject'];
  protected queueGroupName: QueueGroupName;
  abstract onMessage(data: T['data'], parentId: string, msg: CustomMessage): void;
  protected client: Stan;
  protected ackWait = 300 * 1000;

  constructor(natsWrapper: { client: Stan; queueGroupName: QueueGroupName }) {
    this.client = natsWrapper.client;
    this.queueGroupName = natsWrapper.queueGroupName;
  }

  subscriptionOptions() {
    return this.client
      .subscriptionOptions()
      .setDeliverAllAvailable()
      .setManualAckMode(true)
      .setAckWait(this.ackWait)
      .setDurableName(this.queueGroupName);
  }

  subscriptionOptions_replay(){
    return this.client
      .subscriptionOptions()
      .setDeliverAllAvailable()
      .setDurableName(this.queueGroupName)
  }

  listen() {
    if (!this.queueGroupName) throw new Error('QueueGroupName is not configured');
    this.client
      .subscribe(this.subject, this.queueGroupName, this.subscriptionOptions())
      .on('message', (msg: CustomMessage) => {
        const parsedBody = this.parseMessage(msg);
        msg.queueGroupName = this.queueGroupName;
        msg.parentId = parsedBody.meta.id;
        msg.fail = fail;
        msg.subject = this.subject;
        console.log(`Message received: ${this.subject} / ${this.queueGroupName} - parentId: ${msg.parentId}`);
        this.onMessage(parsedBody.data, msg.parentId, msg);
      });

    this.client
      .subscribe(`[REPLAY]-${this.subject}-${this.queueGroupName}`, this.queueGroupName, this.subscriptionOptions_replay())
      .on('message', (msg: CustomMessage) => {
      const parsedBody = this.parseMessage(msg);
      msg.queueGroupName = this.queueGroupName;
      msg.parentId = parsedBody.meta.id;
      msg.fail = fail;
      msg.subject = this.subject;
      console.log(`[REPLAY]Message received: ${this.subject} / ${this.queueGroupName} - parentId: ${msg.parentId}`);
      this.onMessage(parsedBody.data, msg.parentId, msg);
    });
  }
  parseMessage(msg: Message) {
    const data = msg.getData();
    return typeof data === 'string' ? JSON.parse(data) : JSON.parse(data.toString('utf8'));
  }
}

const fail = async function(err: Error, allowedFails: number = 3) {
  console.error(`${this.parentId} event failed, queueGroupName: ${this.queueGroupName}, errMsg: ${err.message}`);
  let { parentId, queueGroupName, subject} = this;
  let { message, stack } = err;
  let { data }: AxiosResponse = await axios.post(`http://log-srv/event/error`, {
    parentId, //eventId of the event listening to
    queueGroupName, // the quegroup which is listening to the event
    subject,
    message,
    stack
  });
  if (data.errorCount >= allowedFails) {
    this.ack();
    console.log(`NEED TO REPLAY. CHECK ERROR LIST`);
  }
};
