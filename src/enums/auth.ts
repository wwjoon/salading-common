export enum Authorities {
  Auth = 'AUTH',
  Commerce = 'COMMERCE',
  Item = 'ITEM',
  Product = 'PRODUCT',
  Ship = 'SHIP',
  Stock = 'STOCK',
  Order = 'ORDER',
  Payment = 'PAYMENT',
  Feedback = 'FEEDBACK',
  Warehouse = 'WAREHOUSE',
  Plan = 'PLAN',
  Notification = 'NOTIFICATION'
}

export enum AuthUpdateType {
  Register = 'register',
  Archive = 'archive',
  Revive = 'revive',
  PasswordChange = 'passwordChange',
  ForgotPassword = 'forgotPassword',
  UserInfoChange = 'userInfoChange'
}

export enum AuthorizedPages {
  Authorities = 'AUTHORITIES',
  FrontMain = 'FRONT_MAIN',
  FrontProduct = 'FRONT_PRODUCT',
  Op1Item = 'OP1_ITEM',
  Op2Prepare = 'OP2_PREPARE',
  Op2Stock = 'OP2_STOCK',
  Op2Packing = 'OP2_PACKING',
  UemShipRestrict = 'UEM_SHIP_RESTRICT',
  UemOrder = 'UEM_ORDER',
  UemMessage = 'UEM_MESSAGE',
  UemUser = 'UEM_USER',
  Finance = 'FINANCE',
  Notification = 'NOTIFICATION'
}

export enum AuthRegisterType {
  Email = 'email',
  Kakao = 'kakao',
  Apple = 'apple'
}

export enum AuthGradeType {
  Personal = 'personal',
  Corporate = 'corporate',
  Manna = 'manna'
}

export enum AuthVeritificationType {
  NewPassword = 'NEW_PASSWORD',
  FindEmail = 'FIND_EMAIL'
}

export enum AdmissionTicketStatusType {
  PayReady = 'PAY_READY',
  PayFailed = 'PAY_FAILED',
  Paid = 'PAID',
  Cancelled = 'CANCELLED',
  Used = 'USED',
  Expired = 'EXPIRED'
}

export enum MeridiemType {
  am = 'AM',
  pm = 'PM'
}

export enum ReservationStatus {
  RESERVED = 'RESERVED',
  VISITED = 'VISITED',
  CANCELLED = 'CANCELLED'
}

export enum AdmissionTicketType {
  DEFAULT = 'DEFAULT',
  EVENT = 'EVENT',  
  CAFE = 'CAFE',
  KITCHEN = 'KITCHEN',
  RESTAURANT = 'RESTAURANT',
  STORE = 'STORE',
  FARM = 'FARM',
  VIP = 'VIP'
}
