module scenes {
  export class PlayScene extends objects.Scene {
    // Variables
    private timer: objects.Label;
    private timerWhenSceneStarted: number;
    private background: objects.Background;
    private pirate: objects.Pirate;
    // Constructor
    constructor(assetManager: createjs.LoadQueue) {
      super(assetManager);

      this.Start();
    }

    public Start(): void {
      console.log("Play scene start");
      // Initialize our variables
      this.pirate = new objects.Pirate(
        this.assetManager,
        "pirate",
        this.GetRandomValue(855),
        this.GetRandomValue(555)
      );

      this.background = new objects.Background(this.assetManager);
      this.timer = new objects.Label("0", "50px", "Consolas", "blue", 20, 20);

      createjs.Ticker.framerate = 120;
      this.timerWhenSceneStarted = createjs.Ticker.getEventTime();
      createjs.Ticker.on("tick", this.Update);

      this.Main();
    }

    public Update(): void {
      if (this.timer != null) {
        console.log(this.timer);
        this.timer.text = (
          (createjs.Ticker.getEventTime() - this.timerWhenSceneStarted) /
          1000
        ).toFixed(2);
      }
    }

    public Main(): void {
      this.addChild(this.background);
      this.addChild(this.timer);
      this.addChild(this.pirate);

      // Register for click events
      this.pirate.on("click", this.PirateCaught);
    }

    private PirateCaught(): void {
      // objects.Game.currentScene = config.Scene.GAME_OVER;
      // stage.removeAllChildren();
      //   currentScene = new scenes.GameOverScene(assetManager);
      //   stage.addChild(currentScene);
    }

    private GetRandomValue(upperLimit: number): number {
      return Math.floor(Math.random() * (upperLimit - 1 + 1)) + 1;
    }
  }
}
