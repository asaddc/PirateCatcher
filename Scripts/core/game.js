(function () {
    var canvas = document.getElementById("canvas");
    var stage;
    var assetManager;
    var assetManifest;
    // Store current scene information
    var currentScene;
    var currentState;
    function Init() {
        console.log("Initializing Start");
        assetManifest = [
            { id: "titleScreenBackground", src: "./Assets/TitleScreenBG.png" },
            { id: "muddyBackground", src: "./Assets/muddy_background.png" },
            { id: "pirate", src: "./Assets/pirate.png" },
            { id: "playButton", src: "./Assets/playButton.png" },
        ];
        assetManager = new createjs.LoadQueue();
        assetManager.installPlugin(createjs.Sound);
        assetManager.loadManifest(assetManifest);
        assetManager.on("complete", Start, this);
    }
    function Start() {
        console.log("Starting Application...");
        // Initialize CreateJS
        stage = new createjs.Stage(canvas);
        stage.enableMouseOver(20);
        createjs.Ticker.framerate = 60;
        createjs.Ticker.on("tick", Update);
        // Set up default game states -- State Machine
        objects.Game.currentScene = config.Scene.MAIN_MENU;
        currentState = config.Scene.MAIN_MENU;
        Main();
    }
    function Update() {
        // Has my state changed since the last check?
        if (currentState != objects.Game.currentScene) {
            console.log("Changing scenes to " + objects.Game.currentScene);
            Main();
        }
        currentScene.Update();
        stage.update();
    }
    function Main() {
        console.log("Game Start");
        // Finite State Machine
        switch (objects.Game.currentScene) {
            case config.Scene.MAIN_MENU:
                stage.removeAllChildren();
                currentScene = new scenes.MainMenuScene(assetManager);
                stage.addChild(currentScene);
                break;
            case config.Scene.PLAY:
                stage.removeAllChildren();
                currentScene = new scenes.PlayScene(assetManager);
                stage.addChild(currentScene);
                break;
            // case config.Scene.GAME_OVER:
            //   stage.removeAllChildren();
            //   currentScene = new scenes.GameOverScene(assetManager);
            //   stage.addChild(currentScene);
            //   break;
        }
        currentState = objects.Game.currentScene;
    }
    window.onload = Init;
})();
//# sourceMappingURL=game.js.map