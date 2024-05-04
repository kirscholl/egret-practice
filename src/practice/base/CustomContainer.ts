class CustomContainer extends egret.Sprite {

  private spr1 = new egret.Sprite();
  private spr2 = new egret.Sprite();

  constructor() {
    super();
    this.drawContainer();
    this.containerDeepManage();
  }

  private drawContainer() {
    this.spr1.graphics.beginFill(0x000fff);
    this.spr1.graphics.drawRect(0, 0, 400, 400);
    this.spr1.graphics.endFill();
    this.addChild(this.spr1);

    // let spr2 = new egret.Sprite();
    this.spr2.graphics.beginFill(0x00ffff);
    // @param x 圆心相对于父显示对象注册点的 x 位置(以像素为单位)
    // @param y 相对于父显示对象注册点的圆心的 y 位置(以像素为单位)
    // 在drawRect函数中设置了x,y之后, 其.x .y的值依然是0
    this.spr2.graphics.drawRect(0, 0, 100, 100);
    console.log("spr2.x = " + this.spr2.x);
    console.log("spr2.y = " + this.spr2.y);
    this.spr2.x = 100;
    this.spr2.y = 100;
    this.spr2.graphics.endFill();
    this.addChild(this.spr2);

    let rec = new egret.Shape();
    rec.graphics.beginFill(0xfff000)
    // 此时rec的父容器为spr2
    rec.graphics.drawRect(10, 10, 30, 30);
    rec.graphics.endFill();

    this.spr1.addChild(this.spr2);
    this.spr2.addChild(rec);
    //
    // if (rec.parent) {
    //   rec.parent.removeChild(rec);
    // }
  }

  private generateSprite(): egret.Sprite {
    let spr = new egret.Sprite();
    spr.graphics.beginFill(0xff0000);
    spr.graphics.drawRect(0, 0, 100, 100);
    spr.graphics.endFill();
    return spr;
  }

  /**
   * 容器深度学习
   * @private
   */
  private containerDeepManage() {
    // z-次序 | 深度值 深度值技术从0开始,优先被添加的显示对象深度值越小
    // 深度值越小,越底层  深度值越大,越上层

    // 容器中有子容器,此时只会打印出该容器中的子对象的数量
    console.log("this.numberChildren: " + this.numChildren);
    console.log("spr1.numberChildren: " + this.spr1.numChildren);
    console.log("spr2.numberChildren: " + this.spr2.numChildren);

    let spr3 = this.generateSprite();
    this.addChild(spr3);
    // numChildren在添加之后数值才会增加
    console.log("this.numberChildren: " + this.numChildren);

    for (let i = 0; i < 5; i++) {
      let spr = new egret.Sprite();
      spr.graphics.beginFill(0xffffff * Math.random());
      spr.graphics.drawRect(0, 0, 150, 150);
      spr.graphics.endFill();
      spr.x = i * 50;
      this.addChild(spr);
    }
    console.log("this.numChildren: " + this.numChildren);

    this.addChildAtSpecificDeep();
  }

  private addChildAtSpecificDeep() {
    let spr = new egret.Sprite();
    spr.graphics.beginFill(0xffffff * Math.random());
    spr.graphics.drawRect(0, 0, 500, 500);
    spr.graphics.endFill();
    this.addChildAt(spr, 2);
    spr.x = 2 * 50;
    spr.name = "testSprite";
    console.log("this.numChildren: " + this.numChildren);

    // 交换两个显示对象的深度值
    this.exchangeChildDeep();

    // 重新设置Child的深度值
    this.changeChildDeep(spr, 10);

    // 通过深度值或name属性获取特定的子显示对象
    this.getSpecificChild();
  }

  private exchangeChildDeep() {
    this.swapChildren(this.getChildAt(2), this.getChildAt(4));
    this.swapChildrenAt(2, 4);
  }

  private changeChildDeep(displayObj: egret.DisplayObject, index: number) {
    this.setChildIndex(displayObj, index);
  }

  private getSpecificChild() {
    // 根据深度值获取子显示对象
    let zeroSprite = this.getChildAt(4);
    zeroSprite.scaleX = 1.5;
    zeroSprite.scaleY = 1.5;

    // 根据name属性获取显示对象
    let testSpr = this.getChildByName("testSprite");
    testSpr.x = 1000;
    testSpr.y = 1000;
  }
}