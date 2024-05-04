class EventSenderTest extends egret.Sprite {

  constructor() {
    super();
  }

  public sendEvent() {
    let testEvent: TestEvent = new TestEvent(TestEvent.eventType);
    testEvent.param1 = "111";
    testEvent.param2 = '222';
    this.dispatchEvent(testEvent);
  }
}