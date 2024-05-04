class SoundTest extends egret.DisplayObjectContainer {

  private archerSound: egret.Sound = new egret.Sound();
  private archerSoundChannel: egret.SoundChannel;

  constructor() {
    super();
    this.drawAudioPauseShape();
    this.loadSoundResource().then(() => {
      // console.log("音频资源加载成功")
      this.playArcherSound();
    })
  }

  private async loadSoundResource() {
    // RES.addEventListener(RES.ResourceEvent.GROUP_COMPLETE, this.addSound(), this);
    await RES.loadConfig("resource/default.res.json", "resource/");
    await RES.loadGroup("sound");
    console.log("音频资源加载成功")

  }

  private playArcherSound() {
    this.archerSound = RES.getRes("archer_mp3")
    //Play()函数第二个入参 loop 为播放次数，默认值是 0，循环播放。 大于 0 为播放次数，如 1 为播放 1 次；小于等于 0，为循环播放。
    //Sound运行play()之后，会返回一个SoundChannel对象，对SoundChannel进行操作可以暂停音频播放,减小音量等等
    this.archerSoundChannel = this.archerSound.play();
    console.log("音频资源播放成功")
  }

  private drawAudioPauseShape() {
    let pauseShape = new egret.Shape();
    pauseShape.graphics.beginFill(0xffffff);
    pauseShape.graphics.drawRect(0, 0, 100, 100);
    pauseShape.graphics.endFill();
    pauseShape.width = 100;
    pauseShape.height = 100;

    pauseShape.touchEnabled = true;
    pauseShape.addEventListener(egret.TouchEvent.TOUCH_TAP, this.pauseArcherSound, this);
    this.addChild(pauseShape);
  }

  private pauseArcherSound(event: egret.TouchEvent) {
    console.log("点击暂停音频播放");
    if (this.archerSoundChannel) {
      this.archerSoundChannel.volume = 0.5
      // this.archerSoundChannel.stop();
    }
  }
}