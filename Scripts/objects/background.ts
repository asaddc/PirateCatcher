module objects {
  export class Background extends createjs.Bitmap {
    constructor(assetManager: createjs.LoadQueue) {
      super(assetManager.getResult("titleScreenBackground"));
    }

    public Start(): void {}

    public Update(): void {}

    public Reset(): void {}

    public Move(): void {}

    public CheckBound(): void {}
  }
}
