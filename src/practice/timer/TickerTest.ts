class TickerTest extends egret.DisplayObjectContainer {

    private time: number = 0;
    private tickNumber = 1;

    constructor() {
        super();
        this.onLoad();
    }

    private onLoad() {
        //startTick（停止对应stopTick）全局函数将以 60 帧速率回调函数，简单来说就是固定时间间隔1秒调60次。
        egret.startTick(this.moveStar,  this);
    }

    private  moveStar(timeStamp:  number):  boolean  {
        const now = timeStamp;
        const time =  this.time;
        const pass = now - time;
        if (this.tickNumber <= 60) {
            // 在1000ms中调用了60次
            console.info("从egret启动经过了" + now + " " + "这是第" + this.tickNumber + "次调用")
        }
        this.tickNumber ++;
        this.time  = now;
        return  false;
    }
}