var playerCharacter = {}
playerCharacter.Create = function(arg){
    arg = arg || {};
    // var player = game.add.sprite(32, game.world.height - 350, 'hero');
    var spawnX = arg.spawnX || 500;
    var spawnY = arg.spawnY || 500;
    var spriteKey = arg.spriteKey || 'hero';

    var player = games.add.sprite(spawnX,spawnY,spriteKey)
    player.frame = arg.startFrame || 5
    player.state = {};
    player.touching = {};
    player.maxJumps = arg.maxJumps || 2;
    player.jumpsRemaining = player.maxJumps;
    //  We need to enable physics on the player
    if ( arg.cameraFollow ) { game.camera.follow(player) }
    game.physics.p2.enable(player);

    //  Player physics properties. Give the little guy a slight bounce.
    player.body.fixedRotation = true;
    player.body.mass = arg.mass || 2
    player.body.clearShapes()
    var feet = player.body.addCircle(18, 0, 60)
    var head = player.body.addRectangle(20,40,0,0)
    head.name = 'head'
    feet.name = 'feet'
    // player.body.bounce.y = 0.2;
    // player.body.gravity.y = 300;
    // player.body.collideWorldBounds = true;

    //  Our two animations, walking left and right.
    player.animations.add('left', [7, 8, 7, 9], 7, true);
    player.animations.add('right', [7, 9, 7, 8], 7, true);
    player.animations.add('jump', [0, 4, 4, 4, 4, 1, 1, 2, 2, 2, 2, 3], 20, false)
    player.animations.add('stand', [10], 1, false)

    player.animations.add('dive', [5], 1, false) 
}