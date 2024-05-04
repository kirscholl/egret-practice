class TimerTest extends egret.DisplayObjectContainer {

  private timeText: egret.TextField;

  constructor() {
    super();
    this.testTimer();
  }

  /**
   * 计时器测试
   * 2个属性delay repeatCount
   * 3个方法start stop reset
   * 2个事件TIMER TIMER_COMPLETE
   * @private
   */
  private testTimer() {
    this.timeText = new egret.TextField();
    this.timeText.text = "计时测试";
    this.timeText.y = 200;
    this.addChild(this.timeText);

    // delay 每隔多长时间触发一次, repeatCount 重复次数
    const timer = new egret.Timer(500, 5);
    // 监听计时器触发 参数: 事件名称 时间监听器(函数) 监听器对象
    timer.addEventListener(egret.TimerEvent.TIMER, this.timerFunc, this);
    // 监听计时结束 参数: 事件名称 时间监听器(函数) 监听器对象
    timer.addEventListener(egret.TimerEvent.TIMER_COMPLETE, this.timerComFunc, this);
    timer.start();
  }

  private timerFunc() {
    console.log("计时");
  }

  private timerComFunc() {
    console.log("计时结束");
  }
}