/**
 * 缓冲动画
 */
class TweenTest extends egret.DisplayObjectContainer {

  constructor() {
    super();
    this.tweenPlay();
  }

  private tweenPlay() {
    let shp = new egret.Shape();
    shp.graphics.beginFill(0x000fff, 0.5);
    //给矩形添加外边框, thickness外边框大小单位像素, color外边框颜色
    shp.graphics.lineStyle(10, 0xfff000);
    shp.graphics.drawRect(0, 0, 400, 400);
    shp.graphics.endFill();
    this.addChild(shp);

    let tw = egret.Tween.get(shp);
    tw.to({ x: 100, y: 100 }, 1000);
  }
}