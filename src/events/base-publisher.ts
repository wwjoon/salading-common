import { Stan } from 'node-nats-streaming';
import { Subjects } from './subjects';
import { Types } from 'mongoose';

interface Event {
  subject: Subjects;
  data: any;
}

export abstract class Publisher<T extends Event> {
  abstract subject: T['subject'];
  protected client: Stan;
  constructor(client: Stan) {
    this.client = client;
  }
  publish(parentId: string, data: T['data']): Promise<void> {
    return new Promise((resolve, reject) => {
      try {
        let body = { meta: { id: new Types.ObjectId(), parentId }, data };
        this.client.publish(this.subject, JSON.stringify(body), err => {
          if (err) return reject(err);
          if (process.env.NODE_ENV !== 'test')
            console.log(`event published to subject ${this.subject} - eventId:${body.meta.id}`);
          return resolve();
        });
      } catch (err) {
        reject(err);
      }
    });
  }
}
