class CustomShape extends egret.Shape {

  constructor() {
    super();
    this.drawCustomGridCard();
    this.rotationTest();
  }

  public drawCustomGridCard() {
    this.graphics.beginFill(0x0000ff);
    this.graphics.drawRect(0, 0, 50, 50);
    this.graphics.endFill();
    this.graphics.beginFill(0x0000ff);
    this.graphics.drawRect(50, 50, 50, 50);
    this.graphics.endFill();
    this.graphics.beginFill(0xff0000);
    this.graphics.drawRect(50, 0, 50, 50);
    this.graphics.endFill();
    this.graphics.beginFill(0xff0000);
    this.graphics.drawRect(0, 50, 50, 50);
    this.graphics.endFill();
  }

  public rotationTest() {
    // 物体偏移,物体旋转均以锚点为原点!
    this.x = 50;
    this.y = 50;
    this.anchorOffsetX = 50;
    this.anchorOffsetY = 50;
    this.rotation = 30;
  }
}