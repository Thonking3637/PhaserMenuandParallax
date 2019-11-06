class Menu extends Phaser.Scene {

    constructor() {
        super({key:"menu"});
        console.log("Menu");
    }
    

    preload() {
        console.log("Menu Preload");
        this.load.image("btn_play_sprite" , "assets/btn_model.png");
        this.load.image("btn_play_sprite2" , "assets/btn_model1.png");
        this.load.image("btn_play_sprite3" , "assets/btn_model2.png");
      
        this.load.image('b1', 'assets/1.png');
        this.load.image('b2', 'assets/2.png');
        this.load.image('b3', 'assets/3.png');
        this.load.image('b4', 'assets/4.png');
        
        this.load.image('cityText', 'assets/cityText.png');
        
    }

    create() {

        console.log("Menu Create");

        this.b1 = this.add.tileSprite(0,0,128,128, "b1");
        this.b2 = this.add.tileSprite(0,0,128,128, "b2");
        this.b3 = this.add.tileSprite(0,0,128,128, "b3");
        this.b4 = this.add.tileSprite(0,0,128,128, "b4");

        this.b1.setOrigin(0,0);
        this.b2.setOrigin(0,0);
        this.b3.setOrigin(0,0);
        this.b4.setOrigin(0,0);

        this.cityText = this.add.image(63,110, "cityText");
        
    
        
        this.btn_play = this.add.image(65, 15, "btn_play_sprite")
            .setInteractive({ useHandCursor: true })
            .on('pointerover', () => this.onPlayOver() )
            .on('pointerout', () => this.onPlayOut() )
            .on('pointerdown', () => this.onPlayDownGame() );
    
        this.btn_play.scale = 1.25;
        

        this.btn_help = this.add.image(65, 28, "btn_play_sprite2")
            .setInteractive({ useHandCursor: true })
            .on('pointerover', () => this.onPlayOver() )
            .on('pointerout', () => this.onPlayOut() )
            .on('pointerdown', () => this.onPlayDownHelp() );

        this.btn_help.scale = 1.25;


        this.btn_credits = this.add.image(65, 41, "btn_play_sprite3")
            .setInteractive({ useHandCursor: true })
            .on('pointerover', () => this.onPlayOver() )
            .on('pointerout', () => this.onPlayOut() )
            .on('pointerdown', () => this.onPlayDownCredits() );
       
        this.btn_credits.scale = 1.25;

         
    }

    onPlayOver() {}
    onPlayOut() {}
    onPlayDownGame() {
        console.log("Press Down Play");
        App.instance.goGameScene();      
    }
    onPlayDownHelp() {
        console.log("Press Down Play");
        App.instance.goHelpScene();      
    }
    onPlayDownCredits() {
        console.log("Press Down Play");
        App.instance.goCreditsScene();      
    }
    

    update(dt) {
        
       this.b1.tilePositionX -= 0.0;
       this.b2.tilePositionX -= 0.1;
       this.b3.tilePositionX -= 0.2;
       this.b4.tilePositionX -= 0.3;
       
    }

}