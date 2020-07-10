module scenes {
  export class GameOverScene extends objects.Scene {
    // Variables
    private gameOverLabel: objects.Label;
    private promptLabel: objects.Label;
    private playAgainButton: objects.Button;
    private quitButton: objects.Button;
    private background: objects.Background;

    // Constructor
    constructor(assetManager: createjs.LoadQueue) {
      super(assetManager);

      this.Start();
    }

    // Method
    public Start(): void {
      // Initialize our variables
      console.log("IN START", objects.Game.timer);
      this.gameOverLabel = new objects.Label(
        "Your Time Was: " + objects.Game.timer,
        "40px",
        "Bangers",
        "blue",
        450,
        120,
        true
      );

      this.promptLabel = new objects.Label(
        "Play Again, or Quit?",
        "40px",
        "Bangers",
        "blue",
        450,
        200,
        true
      );

      this.playAgainButton = new objects.Button(
        this.assetManager,
        "playButton",
        100,
        340
      );

      this.quitButton = new objects.Button(
        this.assetManager,
        "quitButton",
        500,
        340
      );

      this.background = new objects.Background(this.assetManager);
      this.Main();
    }

    public Update(): void {}

    public Main(): void {
      this.addChild(this.background);
      this.addChild(this.promptLabel);
      this.addChild(this.gameOverLabel);
      this.addChild(this.playAgainButton);
      this.addChild(this.quitButton);

      this.playAgainButton.on("click", this.PlayAgainButtonClicked);
      this.quitButton.on("click", this.QuitButtonClicked);
    }

    private PlayAgainButtonClicked(): void {
      objects.Game.currentScene = config.Scene.PLAY;
    }

    private QuitButtonClicked(): void {
      objects.Game.currentScene = config.Scene.MAIN_MENU;
    }
  }
}
