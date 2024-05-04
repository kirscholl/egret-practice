/**
 * 自定义事件
 */
class TestEvent extends egret.Event {

  public static eventType: string = "eventType";
  public param1: string = "param1";
  public param2: string = "param2";

  /**
   *
   * @param type 事件类型
   * @param bubbles 指定事件是否参与事件流的冒泡阶段
   * @param cancelable 是否取消event事件
   * @param data
   */
  constructor(type: string, bubbles: boolean = false, cancelable: boolean = false, data?: any) {
    super(type, bubbles, cancelable);
  }
}