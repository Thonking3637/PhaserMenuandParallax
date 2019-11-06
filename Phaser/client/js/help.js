class Help extends Phaser.Scene {

    constructor() {
        super({key:"help"});
    }


    preload() {
        console.log("Preload Game");
        

        this.load.image('b1', 'assets/1.png');
        this.load.image('b2', 'assets/2.png');
        this.load.image('b3', 'assets/3.png');
        this.load.image('b4', 'assets/4.png');

        this.load.image('howPlay', 'assets/howplayText.png');
        this.load.image('imgHelp', 'assets/helpImage.png');

        this.load.image('button_back', 'assets/button_model4.png');
      
    }

    create() {
        console.log("Create Game");

        this.b1 = this.add.tileSprite(0,0,128,128, "b1");
        this.b2 = this.add.tileSprite(0,0,128,128, "b2");
        this.b3 = this.add.tileSprite(0,0,128,128, "b3");
        this.b4 = this.add.tileSprite(0,0,128,128, "b4");

        this.howPlay = this.add.image(65,20, "howPlay");
        this.imgHelp = this.add.image(65,70, "imgHelp");
        
        this.button_back = this.add.image(10,117, "button_back");


        this.b1.setOrigin(0,0);
        this.b2.setOrigin(0,0);
        this.b3.setOrigin(0,0);
        this.b4.setOrigin(0,0);

        this.button_back = this.add.image(10, 117, "button_back")
        .setInteractive({ useHandCursor: true })
        .on('pointerover', () => this.onPlayOver() )
        .on('pointerout', () => this.onPlayOut() )
        .on('pointerdown', () => this.goMenuScenebtwHelp() );
    }

    goMenuScenebtwHelp(){
        App.instance.goMenuScenebtwHelp(); 
    }

    
    update(dt) {
       this.b1.tilePositionX -= 0.0;
       this.b2.tilePositionX -= 0.1;
       this.b3.tilePositionX -= 0.2;
       this.b4.tilePositionX -= 0.3;
    }
}