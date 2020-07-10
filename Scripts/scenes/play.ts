module scenes {
  export class PlayScene extends objects.Scene {
    // Variables
    private playLabel: objects.Label;
    private background: objects.Background;
    private pirate: objects.Pirate;
    // Constructor
    constructor(assetManager: createjs.LoadQueue) {
      super(assetManager);

      this.Start();
    }

    public Start(): void {
      console.log("Play scene start");
      // Inintialize our variables
      this.pirate = new objects.Pirate(this.assetManager, "pirate", 400, 300);
      this.background = new objects.Background(this.assetManager);
      this.Main();
    }

    public Update(): void {}

    public Main(): void {
      this.addChild(this.background);
      this.addChild(this.pirate);
      // Register for click events
    }
  }
}
