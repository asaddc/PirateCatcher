module objects {
  export class Pirate extends createjs.Bitmap {
    // Variables
    // Constructor
    constructor(
      assetManager: createjs.LoadQueue,
      imageString: string,
      x: number = 0,
      y: number = 0
    ) {
      super(assetManager.getResult(imageString));

      // Default position
      this.x = x;
      this.y = y;

      // Set up event handlers
      this.on("mouseover", this.MouseOver);
      this.on("mouseout", this.MouseOut);
      this.MakePirateJump();
    }
    // Methods
    // Event Handlers
    private MouseOver(): void {
      this.alpha = 0.85;
    }

    private MouseOut(): void {
      this.alpha = 1.0;
    }

    private MakePirateJump() {
      setInterval(() => {
        this.x = this.GetRandomValue(855);
        this.y = this.GetRandomValue(555);
      }, 600);
    }

    private GetRandomValue(upperLimit: number): number {
      return Math.floor(Math.random() * (upperLimit - 1 + 1)) + 1;
    }
  }
}
