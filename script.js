class Scene1 extends Phaser.Scene {
    constructor() {
        super({key: 'Scene1'});
    }
    preload(){
        this.load.path = './assets/';
        this.load.image('BDGame', 'BDGame.png');
        this.load.audio('Loading', ['Loading.mp3']);
    }
    create(){
        var sound1 = this.sound.add('Loading',
            {
                loop: false,
                volume: 0.6
            });
        sound1.play();
        //this.sound.play(sound)
        //this.sound.play('Loading');
        var game = this.add.image(300,300,'BDGame');
        game.setScale(600/game.height,600/game.width);
        this.graphics = this.add.graphics();
        // add shapes
        this.graphics.fillStyle(0xff0000, 1); //color, opacity
        this.graphics.fillCircle(282,440,3);   //x, y, radius
        this.graphics.fillCircle(265,460,3);   //x, y, radius
        this.graphics.fillCircle(285,465,3);   //x, y, radius

        this.cameras.main.once('camerafadeincomplete', function (camera) {
            camera.fadeOut(6000);
        });

        this.cameras.main.fadeIn(6000);

        this.input.once('pointerdown', function (event)
        {
            console.log('From SceneA to SceneB');

            this.scene.start('Scene2');

        },this);

    }
    update(){}
}

class Scene2 extends Phaser.Scene {
    constructor() {
        super({key: 'Scene2'});
    }
    preload(){
        this.load.path = './assets/';
        this.load.image('DBStudios', 'DBStudios.png');
        this.load.audio('Doodlebob', ['Doodlebob.mp3']);
    }
    create(){
        this.sound.play('Doodlebob',
            {
                loop: false,
                volume: 0.6
            });
        var loading = this.add.image(300,300,'DBStudios');
        loading.setScale(600/loading.height,600/loading.width);

        this.cameras.main.once('camerafadeincomplete', function (camera) {
            camera.fadeOut(6000);
        });

        this.cameras.main.fadeIn(6000);

        this.input.once('pointerdown', function (event)
        {
            console.log('From SceneB to SceneC');

            this.scene.start('Scene3');

        },this);

    }
    update(){}
}

class Scene3 extends Phaser.Scene {
    constructor() {
        super({key: 'Scene3'});
    }
    preload(){
        this.load.path = './assets/';
        this.load.image('BDMenu', 'BDMenu.png');
    }
    create(){
        var menu = this.add.image(-300,300,'BDMenu');
        menu.setScale(600/menu.height,600/menu.width);
        this.add.text(0,0,"Created by\nKian van der Meer\nThis is my multiline text",{color: '0x000000'});

        this.tweens.add({
            targets: menu,
            x: 300,
            duration: 2000,
            repeat: 0,
            ease: 'cubic.in'
        });
    }
    update(){}
}

let config = {
    type: Phaser.WEBGL,
    width: 600,
    height: 600,
    backgroundColor: 0xFFFFFF,
    scene: [Scene1, Scene2, Scene3],
}

let game = new Phaser.Game(config);