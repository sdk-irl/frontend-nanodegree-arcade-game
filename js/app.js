// Enemies our player must avoid
var Enemy = function() {
    // Variables applied to each of our instances go here,
    // we've provided one for you to get started
    // x pos
    this.x = 0;
    // y pos
    // The image/sprite for our enemies, this uses
    // a helper we've provided to easily load images
    this.sprite = 'images/enemy-bug.png';
};

// Update the enemy's position, required method for game
// Parameter: dt, a time delta between ticks
Enemy.prototype.update = function(dt) {
    // You should multiply any movement by the dt parameter
    // which will ensure the game runs at the same speed for
    // all computers.

    //If (enemy is not passed boundary) {
        //Move forward
        //Increment x by speed * dt
    //}
    //else {
        //reset pos to start
    //}
};

// Draw the enemy on the screen, required method for game
Enemy.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};

// Create the player class
class Player {
    constructor() {
        //lateral move distance
        this.lat = (101);
        //vertical move distance
        this.vert = (83);
        this.startX = this.lat;
        this.startY = this.vert * 5 - 7;
        this.x = this.startX;
        this.y = this.startY;
        this.sprite = 'images/char-horn-girl.png';
    }
    update() {
        console.log('Player update works');
            //check for collision
                //Did player x and y collide with enemy
            //check for win
                //Did player x and y equal final tiles              
    }
    render() {
        // Draw player sprite on current x and y coordinate position
        // copied from Enemy class
        ctx.drawImage(Resources.get(this.sprite), this.x, this.y);       
    }
    handleInput(key) {
        //update player's x and y property according to input
        switch(key) {
            case 'right':
                if (this.x < this.lat * 4) {
                    console.log(this.x);
                    this.x += this.lat;
                }
                else {
                    this.x = 0;
                }
                    break;  
            case 'left':
                if (this.x >0) {
                    this.x -= this.lat;
                }
                else {
                    this.x = this.lat * 4;
                }
                break;
            case 'up':
                if (this.y > 0) {
                    this.y -= this.vert;
                }                   
                break;
            case 'down':
                if (this.y < this.vert * 4) {
                    this.y += this.vert;
                }
                else
                break;
        }
    }
    resetPlayer() {
        console.log('Player resetPlayer works');
        //set x and y to starting point x and y 
    }
}

// Now instantiate your objects.
// Place all enemy objects in an array called allEnemies
// Place the player object in a variable called player

//New Player object
const player = new Player();

//Init allEnemies array
allEnemies = [];
//For each enemy create and push new Enemy object into above array

// This listens for key presses and sends the keys to your
// Player.handleInput() method. You don't need to modify this.
document.addEventListener('keyup', function(e) {
    var allowedKeys = {
        37: 'left',
        38: 'up',
        39: 'right',
        40: 'down'
    };
    player.handleInput(allowedKeys[e.keyCode]);
});
