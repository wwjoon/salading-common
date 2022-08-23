export enum ShipStepEnum {
    Ready    = 'ready',    // 대기(송장번호 생성 전)
    Prepare  = 'prepare',  // 준비(송장번호 생성 후)
    Shipping = 'shipping', // 배송시작
    Shipped  = 'shipped',  // 배송완료
    Invalid  = 'invalid',  // 배송취소
    Failed   = 'failed'    // 배송생성 실패
}

export enum ShippingTypeEnum {
    Normal = 'normal', // 일반배송
    Bundle = 'bundle', // 묶음배송
    Divide = 'divide'  // 분리배송
}

export enum CourierTypeEnum {
    Epost     = 'EPOST',  // 우체국
    Cj        = 'CJ',     // CJ대한통운
    TeamFresh = 'TIMF',   // 새벽배송(팀프레시)
    Direct    = 'DIRECT', // 업체 직접배송
    WeCook    = 'WECOOK'  // 배달(위쿡)
}

export enum LogType {
    Added = 'added', // 박스 추가
    Bundle = 'bundle', // 박스 병합
    Changed = 'changed', // 박스 변경
    Removed = 'removed', // 박스 삭제
}