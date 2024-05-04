class BitmapTest extends egret.DisplayObjectContainer {

  constructor() {
    super();
    this.loadResource().then(() => {
      this.drawBitmap();
    });
  }

  // group
  // {
  //   "keys":"tree_png",
  //   "name":"tree"
  // }
  // resource
  // {
  //   "name":"tree_png",
  //   "type":"image",
  //   "url":"assets/tree.png"
  // },
  private async loadResource() {
    try {
      const loadingView = new LoadingUI();
      this.addChild(loadingView);
      await RES.loadConfig("resource/default.res.json", "resource/");
      await RES.loadGroup("preload", 0, loadingView);
      // 入参为 group的name
      // await RES.loadGroup("tree");
      this.removeChild(loadingView);
    } catch (e) {
      console.error(e);
    }
  }

  private createBitmapByName(name: string) {
    let result = new egret.Bitmap();
    let texture: egret.Texture = RES.getRes(name);
    result.texture = texture;
    return result;
  }

  private drawBitmap() {
    let sky = this.createBitmapByName("bg_jpg");
    this.addChild(sky);
    let stageW = this.stage.stageWidth;
    let stageH = this.stage.stageHeight;
    sky.width = stageW;
    sky.height = stageH;

    let egretIcon = this.createBitmapByName("egret_icon_png");
    egretIcon.width = 100;
    egretIcon.height = 100;
    this.addChild(egretIcon);

    let treeTexture = this.createBitmapByName("tree_png");
    this.addChild(treeTexture);

    let tree = new egret.Bitmap();
    let texture: egret.Texture = RES.getRes("tree_png");
    tree.texture = texture;
    tree.y = 200;
    // ----------------------------------
    // |         |          |           |
    // |    1    |     2    |     3     |
    // |         |          |           |
    // |--------------------------------|
    // |         |          |           |
    // |    4    |     5    |     6     |
    // |         |          |           |
    // |--------------------------------|
    // |         |          |           |
    // |    7    |     8    |     9     |
    // |         |          |           |
    // ----------------------------------
    // todo 九宫格参数详解
    // 使用九宫格对图片进行拉伸
    // let rec = new egret.Rectangle(30, 31, 40, 41);
    // tree.width *= 3;
    // tree.scale9Grid = rec

    // 使用平铺的方式重复填充图片
    tree.fillMode = egret.BitmapFillMode.REPEAT;
    tree.width *= 2;
    tree.height *= 3;
    this.addChild(tree);
  }
}