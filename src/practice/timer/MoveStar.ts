class MoveStar extends egret.DisplayObjectContainer {
    constructor() {
        super();
        this.onLoad();
    }

    star: egret.Bitmap;
    speed:  number  =  0.05;
    timeOnEnterFrame =  0;

    private  onLoad()  {
        const resLoader = new ResourceLoader();
        resLoader.loadPreloadResource().then(() => {
            const star: egret.Bitmap  =  new  egret.Bitmap(RES.getRes("star_png"));
            this.addChild(star);
            this.star  = star;
            this.addEventListener(egret.Event.ENTER_FRAME,  this.onEnterFrame,  this);
            this.timeOnEnterFrame  = egret.getTimer();
        });
    }

    private  onEnterFrame(e: egret.Event)  {
        const now = egret.getTimer();
        const time =  this.timeOnEnterFrame;
        const pass = now - time;
        this.star.x  +=  this.speed  * pass;
        this.timeOnEnterFrame  = egret.getTimer();
        if  (this.star.x  >  300)
            this.removeEventListener(egret.Event.ENTER_FRAME,  this.onEnterFrame,  this);
    }
}