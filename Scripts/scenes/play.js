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
    var PlayScene = /** @class */ (function (_super) {
        __extends(PlayScene, _super);
        // Constructor
        function PlayScene(assetManager) {
            var _this = _super.call(this, assetManager) || this;
            _this.Start();
            return _this;
        }
        PlayScene.prototype.Start = function () {
            console.log("Play scene start");
            // Initialize our variables
            this.pirate = new objects.Pirate(this.assetManager, "pirate", this.GetRandomValue(855), this.GetRandomValue(555));
            this.background = new objects.Background(this.assetManager);
            this.timer = new objects.Label("0", "50px", "Bangers", "blue", 20, 20);
            this.Main();
        };
        PlayScene.prototype.Update = function () {
            if (this.timer != null) {
                // console.log(this.timer);
                this.timer.text = (createjs.Ticker.getEventTime() / 1000).toFixed(2);
            }
        };
        PlayScene.prototype.Main = function () {
            this.addChild(this.background);
            this.addChild(this.timer);
            this.addChild(this.pirate);
            // Register for click events
            this.pirate.on("click", this.PirateCaught);
        };
        PlayScene.prototype.PirateCaught = function () {
            objects.Game.timer = (createjs.Ticker.getEventTime() / 1000).toFixed(2);
            objects.Game.currentScene = config.Scene.GAME_OVER;
        };
        PlayScene.prototype.GetRandomValue = function (upperLimit) {
            return Math.floor(Math.random() * (upperLimit - 1 + 1)) + 1;
        };
        return PlayScene;
    }(objects.Scene));
    scenes.PlayScene = PlayScene;
})(scenes || (scenes = {}));
//# sourceMappingURL=play.js.map