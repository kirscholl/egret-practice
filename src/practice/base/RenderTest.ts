class RenderTest extends egret.DisplayObjectContainer {

  constructor() {
    super();
    this.addEventListener(egret.Event.ADDED_TO_STAGE, this.onAddToStage, this);
  }

  private onAddToStage() {
    let shape = new egret.Shape();
    shape.graphics.beginFill(0xFFFFFF);
    shape.graphics.drawRect(10, 10, 100, 100);
    shape.graphics.endFill();
    // 以锚点为旋转基点,物体默认锚点为物体的左上角,x轴为水平轴,顺时针方向旋转30
    shape.width = 100;
    shape.height = 100;
    shape.alpha = 0.5;
    shape.scaleX = 1.5;
    shape.scaleY = 1.5;
    shape.rotation = 30;
    this.addChild(shape);
  }
}