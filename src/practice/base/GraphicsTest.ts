class GraphicsTest extends egret.DisplayObjectContainer {

  constructor() {
    super();
    this.graphicsTest();
  }

  private graphicsTest() {
    this.drawCurveLine();
  }

  private drawRecLine() {
    let shp = new egret.Shape();
    shp.graphics.beginFill(0x000fff, 0.5);
    //给矩形添加外边框, thickness外边框大小单位像素, color外边框颜色
    shp.graphics.lineStyle(10, 0xfff000);
    shp.graphics.drawRect(0, 0, 400, 400);
    shp.graphics.endFill();
    shp.x = 10;
    shp.y = 10;
    this.addChild(shp);
  }

  private drawLine() {
    let line = new egret.Shape();
    // line.graphics.beginFill(0xfff000, 0.5);
    line.graphics.lineStyle(10, 0x000fff);
    // 初始绘制点移动到(10, 10)
    line.graphics.moveTo(10, 10);
    // 从(10, 10)到(100, 100)绘制线段
    line.graphics.lineTo(100, 100);
    line.graphics.lineTo(263, 140);
    line.graphics.lineTo(435, 378);
    // 多次lineTo会绘制连接线段
    line.graphics.endFill();
    this.addChild(line)
  }

  private drawCurveLine() {
    //todo 贝塞尔曲线学习
    let curveLine = new egret.Shape();
    curveLine.graphics.lineStyle(10, 0x000fff);
    // 初始绘制点移动到(10, 10)
    curveLine.graphics.moveTo(10, 10);
    // 从(10, 10)到(100, 100)绘制线段
    curveLine.graphics.curveTo(100, 100, 200, 50);
    // 多次lineTo会绘制连接线段
    curveLine.graphics.endFill();
    this.addChild(curveLine)
  }
}