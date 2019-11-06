class App {

    constructor() {

        this.menuScene = new Menu();
        this.gameScene = new Game();
        this.helpScene = new Help();
        this.creditsScene = new Credits();
        
        this.game = new Phaser.Game( 
             {type: Phaser.AUTO,width: 128,
             height: 128 ,
             scene: [this.menuScene , this.gameScene, this.helpScene, this.creditsScene] ,  useTicker: true,          
             pixelArt: true,
             zoom: 5,        
            }
        );
        }

    goGameScene() {
        this.game.scene.sleep("menu");
        this.game.scene.start("game");
    }
    goHelpScene() {
        this.game.scene.sleep("menu");
        this.game.scene.start("help");
    }
    goCreditsScene() {
        this.game.scene.sleep("menu");
        this.game.scene.start("credits");
    }

    goMenuScenebtwGame(){
        this.game.scene.sleep("game");
        this.game.scene.start("menu");

    }

    goMenuScenebtwHelp(){
        this.game.scene.sleep("help");
        this.game.scene.start("menu");
    }
    goMenuScenebtwCredits(){
        this.game.scene.sleep("credits");
        this.game.scene.start("menu")
    }
}
function init() {
    App.instance = new App();
}


/* 
     this.game =  new Phaser.Help( 
            {type: Phaser.AUTO,width: 128,
            height: 128 ,
            scene: [this.menuScene ,  this.helpScene] ,  useTicker: true,          
            pixelArt: true,
            zoom: 5,        
            }
        );
        this.game =  new Phaser.Credits( 
        {type: Phaser.AUTO,width: 128,
        height: 128 ,
        scene: [this.menuScene , this.creditsScene] ,  useTicker: true,          
        pixelArt: true,
        zoom: 5,        
            }
        );
  goHelpScene(){
        this.game.scene.sleep("menu");
        this.game.scene.start("help");
    }
    goCreditsScene(){
        this.game.scene.remove("menu");
        this.game.scene.start("credits");
    }

*/ 