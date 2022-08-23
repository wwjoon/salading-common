import { gql } from 'apollo-server';

//getShippingInfo
export const getDateIn = days => new Date(Date.now() + days * 24 * 60 * 60 * 1000).toISOString().substring(0, 10);
export const getDayIn = days => new Date(Date.now() + days * 24 * 60 * 60 * 1000).getDay();
export const getWantDate = async (
  Client,
  TZ_OFFSET: number,
  shippingDate: Date,
  shipMethod?: ShipMethod,
  shipMethodId?: string
) => {
  if (!shipMethod && !shipMethodId) throw new Error('shipMethod, shipMethodId 중 하나는 제공되어야 합니다.');
  if (!shipMethod) shipMethod = await getShipMethod(Client, shipMethodId);

  let exception = shipMethod.exceptions.find(v => v.shippingDate === shippingDate.toISOString().substring(0, 10));
  if (!exception) exception = shipMethod.exceptions.find(v => v.shippingDay === shippingDate.getDay());

  const { shippingDuration, isNotShipping, lastOrderInfo } = getShippingDetails(shipMethod, exception);
  const wantDate = addDays(new Date(shippingDate), shippingDuration);
  const lastOrderTime = getLastOrderTime(shippingDate, TZ_OFFSET, lastOrderInfo);
  return { shippingDuration, isNotShipping, lastOrderTime, wantDate };
};

export const getWeek = date => Math.floor(new Date(date).getTime() / (1000 * 60 * 60 * 24 * 7));

export const getShippingDate = async (
  Client,
  TZ_OFFSET: number,
  wantDate: Date,
  shipMethod?: ShipMethod,
  shipMethodId?: string
) => {
  if (!shipMethod && !shipMethodId) throw new Error('shipMethod, shipMethodId 중 하나는 제공되어야 합니다.');
  if (!shipMethod) shipMethod = await getShipMethod(Client, shipMethodId);

  for (let i = 0; i < 4; i++) {
    let shippingDate = new Date(wantDate.getTime() - i * 24 * 60 * 60 * 1000);
    let exception = shipMethod.exceptions.find(v => v.shippingDate === shippingDate.toISOString().substring(0, 10));
    if (!exception) exception = shipMethod.exceptions.find(v => v.shippingDay === shippingDate.getDay());

    const { shippingDuration, isNotShipping, lastOrderInfo } = getShippingDetails(shipMethod, exception);
    const lastOrderTime = getLastOrderTime(shippingDate, TZ_OFFSET, lastOrderInfo);
    if (
      new Date(new Date().getTime() + TZ_OFFSET * 60 * 60 * 1000).toISOString() < lastOrderTime &&
      !isNotShipping &&
      addDays(new Date(shippingDate), shippingDuration).toISOString() === wantDate.toISOString()
    ) {
      return { shippingDuration, isNotShipping, lastOrderTime, shippingDate };
    }
  }
  throw new Error('해당 수령일은 선택이 불가능합니다.');
};
const getShippingDetails = (shipMethod: ShipMethod, exception: ShipException) => {
  const shippingDuration = exception ? exception.shippingDuration : shipMethod.shippingDuration;
  const isNotShipping = exception ? exception.isNotShipping : false;

  let lastOrderInfo = shipMethod.lastOrderTime.split(':');
  if (exception) lastOrderInfo = exception.lastOrderTime.split(':');
  return { shippingDuration, isNotShipping, lastOrderInfo };
};

export const addDays = (date: Date, days: number): Date => new Date(date.getTime() + days * 24 * 60 * 60 * 1000);

export const getTodayPlusDays = (TZ_OFFSET: number, days: number): Date => {
  const timezoneTimeDiff = TZ_OFFSET * 3600000;
  const curDateTimePlusTimezoneTimeDiff = new Date().getTime() + timezoneTimeDiff;
  const todayUtc = new Date(curDateTimePlusTimezoneTimeDiff - curDateTimePlusTimezoneTimeDiff % 86400000);
  return new Date(todayUtc.getTime() + days * 86400000);
};

interface ShipMethod {
  id: string;
  lastOrderTime: string;
  shippingDuration: number;
  exceptions: ShipException[];
}

interface ShipException {
  shippingDay?: number;
  shippingDate?: string;
  wantDay?: number;
  wantDate?: string;
  lastOrderTime: string;
  isNotShipping: boolean;
  shippingDuration: number;
}

export const getShipMethod = async (Client: any, shipMethodId: string): Promise<ShipMethod> => {
  const {
    data: { shipMethod }
  } = await Client.query({
    query: gql`
      query shipMethod($shipMethodId: ID!) {
        shipMethod(id: $shipMethodId) {
          id
          lastOrderTime
          shippingDuration
          exceptions {
            shippingDay
            shippingDate
            wantDay
            wantDate
            lastOrderTime
            isNotShipping
            shippingDuration
          }
        }
      }
    `,
    variables: { shipMethodId }
  });
  if (!shipMethod) throw new Error('유효하지 않은 shipMethodId입니다.');

  return shipMethod;
};

export const getLastOrderTime = (shippingDate: Date, TZ_OFFSET: number, lastOrderInfo: string[]): string =>
  new Date(
    shippingDate.getTime() + (parseInt(lastOrderInfo[0]) * 60 + parseInt(lastOrderInfo[1])) * 60000
  ).toISOString();
