class EventReceiverTest extends egret.Sprite {

  constructor() {
    super();
  }

  public receiveEvent(event: TestEvent) {
    console.log("接收器接收到了事件 " + "event.param1: " + event.param1 + " " + "event.param2: " + event.param2);
  }
}