// 帧速率，通常缩写为 FPS（每秒帧数），是指一秒钟内屏幕上显示的连续图像或“帧”的数量。60FPS每秒播放60帧动画。

class FrameTest extends egret.DisplayObjectContainer {

    private timeOnEnterFrame: number = 0;
    private frameNumber = 0;

    constructor() {
        super();
        this.observeEnterFrame();
    }

    private observeEnterFrame() {
        // 帧事件 ENTER_FRAME 在下一帧开始时回调。其回调速率跟帧率相关。
        this.addEventListener(egret.Event.ENTER_FRAME, this.onEnterFrame, this);
        this.timeOnEnterFrame = egret.getTimer();
    }

    private onEnterFrame() {
        //  egret.getTimer()此方法返回自启动 Egret 框架以来经过的毫秒数
        const now = egret.getTimer();
        const time = this.timeOnEnterFrame;
        const pass = now - time;
        if (this.frameNumber <= 20) {
            console.info("这是第" + this.frameNumber + "帧", "距离egret启动过去了" + now + "毫秒" + "距离上一帧过去了" + pass + "毫秒");
            console.log("onEnterFrame: ", (1000 / pass).toFixed(5));
            console.log("egret.getTimer() now = " + now);
        }
        this.frameNumber ++;
        this.timeOnEnterFrame = egret.getTimer();
    }
}