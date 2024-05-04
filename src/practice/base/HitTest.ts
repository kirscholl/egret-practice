class HitTest extends egret.DisplayObjectContainer {

  private infoText: egret.TextField;
  private pixelHitText: egret.TextField;

  public constructor() {
    super();
    this.addEventListener(egret.Event.ADDED_TO_STAGE, this.onAddToStage, this);
  }

  public onAddToStage() {
    this.drawInfoText();

    const shp: egret.Shape = new egret.Shape();
    shp.graphics.beginFill(0xff0000);
    shp.graphics.drawCircle(0, 0, 20);
    shp.graphics.endFill();
    shp.width = 100;
    shp.height = 100;
    this.addChild(shp);
    // const isHit: boolean = shp.hitTestPoint(10, 10, false);
    // const isPixelHit: boolean = shp.hitTestPoint(10, 10, true);
    // const isHit: boolean = shp.hitTestPoint(20, 20, false);
    // const isPixelHit: boolean = shp.hitTestPoint(20, 20, true);
    const isHit: boolean = shp.hitTestPoint(25, 25);
    const isPixelHit: boolean = shp.hitTestPoint(25, 25, true);
    this.infoText.text = "碰撞检测 非像素检测:" + isHit;
    this.pixelHitText.text = "碰撞检测 像素检测:" + isPixelHit;
    // todo 像素检测和非像素检测结果是一样的???均为false

    // let rec = new egret.Shape();
    // rec.graphics.beginFill(0xFF000);
    // rec.graphics.drawRect(0, 0, 50, 50);
    // rec.width = 100;
    // rec.height = 100;
    // rec.graphics.endFill();
    // this.addChild(rec);
    // // const isHit: boolean = rec.hitTestPoint(25, 25, false);
    // // const isPixelHit: boolean = rec.hitTestPoint(25, 25, true);
    // // const isHit: boolean = rec.hitTestPoint(50, 50, false);
    // // const isPixelHit: boolean = rec.hitTestPoint(50, 50, true);
    // const isHit: boolean = rec.hitTestPoint(60, 60, false);
    // const isPixelHit: boolean = rec.hitTestPoint(60, 60, true);
    // this.infoText.text = "碰撞检测 非像素检测:" + isHit;
    // this.pixelHitText.text = "碰撞检测 像素检测:" + isPixelHit;
  }

  public drawInfoText() {
    this.infoText = new egret.TextField();
    this.infoText.y = 200;
    this.infoText.text = "碰撞检测 非像素检测:";
    this.addChild(this.infoText);

    this.pixelHitText = new egret.TextField();
    this.pixelHitText.y = 400;
    this.pixelHitText.text = "碰撞检测 像素检测:";
    this.addChild(this.pixelHitText);

  }
}