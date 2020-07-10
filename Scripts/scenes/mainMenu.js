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
    var MainMenuScene = /** @class */ (function (_super) {
        __extends(MainMenuScene, _super);
        // Constructor
        function MainMenuScene(assetManager) {
            var _this = _super.call(this, assetManager) || this;
            _this.Start();
            return _this;
        }
        // Methods
        MainMenuScene.prototype.Start = function () {
            // Initialize our objects for this scene
            this.welcomeLabel = new objects.Label("Pirate Catcher!", "60px", "Consolas", "Blue", 450, 120, true);
            // NOTE: PreloadJS manifest id
            this.startButton = new objects.Button(this.assetManager, "playButton", 300, 300);
            this.background = new objects.Background(this.assetManager);
            this.Main();
        };
        MainMenuScene.prototype.Update = function () { };
        MainMenuScene.prototype.Main = function () {
            // Add items to the scene
            this.addChild(this.background);
            this.addChild(this.welcomeLabel);
            this.addChild(this.startButton);
            this.startButton.on("click", this.startButtonClick);
        };
        MainMenuScene.prototype.startButtonClick = function () {
            // Change from START to GAME scene
            objects.Game.currentScene = config.Scene.PLAY;
        };
        return MainMenuScene;
    }(objects.Scene));
    scenes.MainMenuScene = MainMenuScene;
})(scenes || (scenes = {}));
//# sourceMappingURL=mainMenu.js.map