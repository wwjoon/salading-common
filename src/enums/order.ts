export enum OrderStatus {
  StockReady = 'STOCK_READY',   // 주문 데이터 생성 (재고 배정 전)
  PayReady = 'PAY_READY',       // 장바구니에서 결제페이지로 넘어갈 때 생성(재고 배정 후)
  PayPrepare = 'PAY_PREPARE',   // 결제하기를 눌렀을 때 PG사 결제 진행 전 결제서버에 결제금액을 저장한다.(보안장치). 이 때 결제id(payment_id)가 발급되고 주문데이터에도 저장된다.
  Paid = 'PAID',                // PG사 결제가 성공적으로 진행하면 결제서비스에서 검증 후 결제서비스가 주문데이터를 상태를 업데이트한다.
  Prep = 'PREP',                // 출고일/시간대가 충족되면 배송서비스가 상품준비로 업데이트 한다.
  Shipping = 'SHIPPING',        // 실제로 배송차가 떠나는 시점에 배송서비스가 배송시작으로 업데이트 한다. ( 18시 BatchProcess )
  Shipped = 'SHIPPED',          // 배송이 완료 되면 배송서비스가 배송완료로 업데이트한다. ( 10분간격 BatchProcess )
  PickedUp = 'PICKEDUP',        // 오프라인 주문 종료 (=SHIPPED)
  Cancelled = 'CANCELLED',      // 주문에서 전체환불이 되었을 때(SHIPPING이후 상태 변화에 취소 없음)
  PayFailed = 'PAY_FAILED',     // 결제 실패
  TempRemoved = 'TEMP_REMOVED', // 결제페이지로 넘어왔는데 결제진행이 마무리 되지 않았을 떄,
  StockFailed = 'STOCK_FAILED'  // 주문서 생성시에 가능한 수령일이 없을 때(STOCK_READY 이후)
}

export enum OrderType {
  DineIn = 'dineIn',     // 매장 식사
  Takeout = 'takeout',   // 테이크아웃
  Pickup = 'pickUp',     // 매장 수령
  Delivery = 'delivery', // 배달 수령
  Shipping = 'shipping'  // 택배 수령
}
