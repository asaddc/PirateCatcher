module scenes {
  export class MainMenuScene extends objects.Scene {
    // Variables
    private welcomeLabel: objects.Label;
    private startButton: objects.Button;
    private background: objects.Background;

    // Constructor
    constructor(assetManager: createjs.LoadQueue) {
      super(assetManager);
      this.Start();
    }
    // Methods
    public Start(): void {
      // Initialize our objects for this scene
      this.welcomeLabel = new objects.Label(
        "Pirate Catcher!",
        "60px",
        "Consolas",
        "Blue",
        450,
        120,
        true
      );

      // NOTE: PreloadJS manifest id
      this.startButton = new objects.Button(
        this.assetManager,
        "playButton",
        300,
        300
      );

      this.background = new objects.Background(this.assetManager);
      this.Main();
    }

    public Update(): void {}

    public Main(): void {
      // Add items to the scene
      this.addChild(this.background);
      this.addChild(this.welcomeLabel);
      this.addChild(this.startButton);
      this.startButton.on("click", this.startButtonClick);
    }

    private startButtonClick(): void {
      // Change from START to GAME scene
      objects.Game.currentScene = config.Scene.PLAY;
    }
  }
}
