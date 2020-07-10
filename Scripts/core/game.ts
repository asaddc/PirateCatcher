(function () {
  let canvas = document.getElementById("canvas");
  let stage: createjs.Stage;

  let assetManager: createjs.LoadQueue;
  let assetManifest: any[];

  // Store current scene information
  let currentScene: objects.Scene;
  let currentState: number;

  function Init(): void {
    console.log("Initializing Start");

    assetManifest = [
      { id: "titleScreenBackground", src: "./Assets/TitleScreenBG.png" },
      { id: "muddyBackground", src: "./Assets/muddy_background.png" },
      { id: "pirate", src: "./Assets/pirate.png" },
      { id: "playButton", src: "./Assets/playButton.png" },
      { id: "quitButton", src: "./Assets/quitButton.png" },
    ];

    assetManager = new createjs.LoadQueue();
    assetManager.installPlugin(createjs.Sound);
    assetManager.loadManifest(assetManifest);
    assetManager.on("complete", Start, this);
  }

  function Start(): void {
    console.log("Starting Application...");

    // Initialize CreateJS
    stage = new createjs.Stage(canvas);
    stage.enableMouseOver(20);

    createjs.Ticker.framerate = 120;
    SetUpTickerEvent();

    // Set up default game states -- State Machine
    objects.Game.currentScene = config.Scene.MAIN_MENU;
    currentState = config.Scene.MAIN_MENU;
    Main();
  }

  function Update(): void {
    // Has my state changed since the last check?
    if (currentState != objects.Game.currentScene) {
      console.log("Changing scenes to " + objects.Game.currentScene);
      Main();
    }

    currentScene.Update();
    stage.update();
  }

  function SetUpTickerEvent(): void {
    createjs.Ticker.reset();
    createjs.Ticker.on("tick", Update);
  }

  function Main(): void {
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
        SetUpTickerEvent();
        currentScene = new scenes.PlayScene(assetManager);
        stage.addChild(currentScene);
        break;
      case config.Scene.GAME_OVER:
        stage.removeAllChildren();
        currentScene = new scenes.GameOverScene(assetManager);
        stage.addChild(currentScene);
        break;
    }

    currentState = objects.Game.currentScene;
  }

  window.onload = Init;
})();
