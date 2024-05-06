class RenderTest extends egret.DisplayObjectContainer {

  constructor() {
    super();
    // this.addEventListener(egret.Event.ADDED_TO_STAGE, this.onAddToStage, this);
    this.onAddToStage();
  }

  private onAddToStage() {
    let shape = new egret.Shape();
    shape.graphics.beginFill(0xFFFFFF);
    shape.graphics.drawRect(10, 10, 100, 100);
    shape.graphics.endFill();
    // 以锚点为旋转基点,物体默认锚点为物体的左上角,x轴为水平轴,顺时针方向旋转30
    // shape.width = 500;
    // shape.height = 500;
    shape.x = 200;
    shape.y = 200;
    shape.alpha = 0.5;
    shape.scaleX = 1.5;
    shape.scaleY = 1.5;
    // shape.rotation = 30;
    this.addChild(shape);

    // 斜切是对图像在2D空间进行的一种平行矩阵变形。
    // 斜切可从两个方向进行控制，对X方向的斜切将导致矩形的底边在X方向发生相应的偏移。
    shape.skewX = 10;
    shape.skewY = 10;
  }
}