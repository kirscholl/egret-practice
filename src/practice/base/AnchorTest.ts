class AnchorTest extends egret.Shape {

  constructor() {
    super();
    this.drawShape();
  }

  private drawShape() {
    this.graphics.beginFill(0x0000ff);
    this.graphics.drawRect(0, 0, 100, 100);
    this.graphics.endFill();
    // 物体偏移,物体旋转均以锚点为原点!
    this.width = 100;
    this.height = 100;
    this.x = 100;
    this.y = 100;
    this.anchorOffsetX = 30;
    this.anchorOffsetY = 30;
    this.rotation = 30;
  }
}