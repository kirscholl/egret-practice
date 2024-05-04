class TextTest extends egret.DisplayObjectContainer {

  constructor() {
    super();
    this.showText();
  }

  private showText() {
    let text = new egret.TextField();
    // width 30 height 120
    // text.text = "测\n试\n文\n本";
    // height 120 width 30
    text.text = "测试文本";
    // TextField.width 和 TextField.height根据文本内容自适应调整
    console.log(text.width + "---" + text.height);
    text.width = 70;
    text.height = 70;
    // 设置文本颜色
    text.textColor = 0xfff000;
    // 设置字体
    // todo 字体不生效
    text.fontFamily = "KaiTi"
    // 设置文字布局
    text.textAlign = egret.HorizontalAlign.RIGHT;
    // 设置字体风格
    // 粗体
    text.bold = true;
    // 斜体
    text.italic = true;
    this.addChild(text);
  }
}