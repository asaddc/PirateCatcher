module scenes {
  export class PlayScene extends objects.Scene {
    // Variables
    private timer: objects.Label;
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
      this.timer = new objects.Label("0", "50px", "Bangers", "blue", 20, 20);

      this.Main();
    }

    public Update(): void {
      if (this.timer != null) {
        // console.log(this.timer);
        this.timer.text = (createjs.Ticker.getEventTime() / 1000).toFixed(2);
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
      objects.Game.timer = (createjs.Ticker.getEventTime() / 1000).toFixed(2);
      objects.Game.currentScene = config.Scene.GAME_OVER;
    }

    private GetRandomValue(upperLimit: number): number {
      return Math.floor(Math.random() * (upperLimit - 1 + 1)) + 1;
    }
  }
}
