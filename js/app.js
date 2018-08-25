// Enemies our player must avoid
class Enemy {
    constructor(y, x, rate) {
        const rowSpacing = 83;
        //lateral move distance
        this.lat = 101;
        //vertical move distance
        this.x = -this.lat * x;
        this.y = y * rowSpacing - 5; //subtract 5 for positioning
        this.sprite = 'images/enemy-bug.png';
        this.speed = rate;
    }
    // Update the enemy's position, required method for game
    // Parameter: dt, a time delta between ticks
    update(dt) {
        //if enemy is not off the border
        if (this.x < this.lat * 5) {
            //Move forward and increment x by speed * dt for consistency across browsers
            this.x += this.lat * dt * this.speed;
        }
        //if enemy is past border reset enemy to original spot
        else {
           this.x = -this.lat;
        }
    }
    // Draw the enemy on the screen, required method for game
    render() {
        ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
    }
}

// Create the player class
class Player {
    constructor() {
        //lateral move distance
        this.lat = 101;
        //vertical move distance
        this.vert = 83;
        this.startX = this.lat;
        this.startY = this.vert * 5 - 5; //subtract 5 for positioning
        this.x = this.startX;
        this.y = this.startY;
        this.sprite = 'images/char-horn-girl.png';
    }
    update() {
        for(let enemy of allEnemies) {
            //check for collision
            if((enemy.x + this.lat > //) && this.y === enemy.y ) {
                console.log('i\'m hit!');
            }
        }

                //Did player x and y collide with enemy

            
            //Win if player location equal final tiles 
            if (this.y < 76) { 
                console.log('player won!') // TODO How to reset game
            }         
    }
    render() {
        // Draw player sprite on current x and y coordinate position, copied from Enemy class
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
        this.x = this.startX;
        this.y = this.startY;
    }
}

// Now instantiate your objects.
// Place all enemy objects in an array called allEnemies
// Place the player object in a variable called player

//New Player object
const player = new Player();

//Init allEnemies array
const allEnemies = [];

//For each enemy create and push new Enemy object into above array
const enemy1 = new Enemy(1, 1, .8);
const enemy2 = new Enemy(1, 3, .8);
const enemy3 = new Enemy(2, 2, .6);
const enemy4 = new Enemy(2, 3, .6);
const enemy5 = new Enemy(3, .5, .4);
const enemy6 = new Enemy(3, 5, .4);
allEnemies.push(enemy1, enemy2, enemy3, enemy4, enemy5, enemy6);

//for (let i = 0; i < 4; i++) {
//    setTimeout(function() {
//        allEnemies.push(new Enemy());
//    }, 2000);
//}


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
