class EventTestContainer extends egret.DisplayObjectContainer {

  constructor() {
    super();
    // this.customEventTest();
    this.touchEventTest();
  }

  private customEventTest() {
    //初始化时间发送器和时间监听器
    let eventSender: EventSenderTest = new EventSenderTest();
    let eventReceiver: EventReceiverTest = new EventReceiverTest();
    // 注册监听器, 事件的侦听器必须是一个函数, 此处事件的监听器为eventReceiver.receiveEvent
    eventSender.addEventListener(
      TestEvent.eventType,
      eventReceiver.receiveEvent,
      eventReceiver,
      false,
      10);
    // priority事件优先级,priority越大优先级越高
    // 检测监听器
    let hasListener = eventSender.hasEventListener(TestEvent.eventType);
    console.log("监听器检测: " + hasListener);
    // 发送时间消息
    eventSender.sendEvent();
    // 移除监听器
    eventSender.removeEventListener(TestEvent.eventType, eventReceiver.receiveEvent, eventReceiver);
    hasListener = eventSender.hasEventListener(TestEvent.eventType);
    console.log("监听器检测, 执行移除监听器之后: " + hasListener);
  }

  private touchEventTest() {
    let spr = new egret.Sprite();
    spr.graphics.beginFill(0xfff000);
    spr.graphics.drawRect(0, 0, 150, 150);
    spr.graphics.endFill();
    this.addChild(spr);

    spr.touchEnabled = true;
    spr.addEventListener(egret.TouchEvent.TOUCH_TAP, this.handleTouchEvent, spr);
  }

  private handleTouchEvent() {
    console.log("触发了spr的触摸事件!!!")
  }
}