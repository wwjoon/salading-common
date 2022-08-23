export enum PaymentType {
  Payment = 'payment',
  Cancel = 'cancel'
}

export enum PaymentStatus {
  Ready = 'ready',
  Paid = 'paid',
  Cancelled = 'cancelled',
  Failed = 'failed'
}

export enum PaymentSystemStatus {
  Ready = 'ready',
  Paid = 'paid',
  Cancelled = 'cancelled',
  Failed = 'failed'
}

export enum PayMethodTypes {
  Point = 'point',
  Card = 'card',
  Trans = 'trans',
  Void = 'void'
}

export enum PGTypes {
  Inicis = 'inicis',
  Jtnet = 'jtnet',
  Kakaopay = 'kakaopay',
  Smilepay = 'smilepay',
  Html5Inicis = 'html5_inicis',
  Kcp = 'kcp',
  KcpBilling = 'kcp_billing',
  Naverpay = 'naverpay',
  Direct = 'direct',
  Void = 'void'
}

export enum PaymentSystemTypes {
  Iamport = 'iamport',
  External = 'external',
  Direct = 'direct',
  Void = 'void'
}
