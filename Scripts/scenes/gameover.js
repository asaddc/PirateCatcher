var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var scenes;
(function (scenes) {
    var GameOverScene = /** @class */ (function (_super) {
        __extends(GameOverScene, _super);
        // Constructor
        function GameOverScene(assetManager) {
            var _this = _super.call(this, assetManager) || this;
            _this.Start();
            return _this;
        }
        // Method
        GameOverScene.prototype.Start = function () {
            // Initialize our variables
            console.log("IN START", objects.Game.timer);
            this.gameOverLabel = new objects.Label("Your Time Was: " + objects.Game.timer, "40px", "Bangers", "blue", 450, 120, true);
            this.promptLabel = new objects.Label("Play Again, or Quit?", "40px", "Bangers", "blue", 450, 200, true);
            this.playAgainButton = new objects.Button(this.assetManager, "playButton", 100, 340);
            this.quitButton = new objects.Button(this.assetManager, "quitButton", 500, 340);
            this.background = new objects.Background(this.assetManager);
            this.Main();
        };
        GameOverScene.prototype.Update = function () { };
        GameOverScene.prototype.Main = function () {
            this.addChild(this.background);
            this.addChild(this.promptLabel);
            this.addChild(this.gameOverLabel);
            this.addChild(this.playAgainButton);
            this.addChild(this.quitButton);
            this.playAgainButton.on("click", this.PlayAgainButtonClicked);
            this.quitButton.on("click", this.QuitButtonClicked);
        };
        GameOverScene.prototype.PlayAgainButtonClicked = function () {
            objects.Game.currentScene = config.Scene.PLAY;
        };
        GameOverScene.prototype.QuitButtonClicked = function () {
            objects.Game.currentScene = config.Scene.MAIN_MENU;
        };
        return GameOverScene;
    }(objects.Scene));
    scenes.GameOverScene = GameOverScene;
})(scenes || (scenes = {}));
//# sourceMappingURL=gameOver.js.map