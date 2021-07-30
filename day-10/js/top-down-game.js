// const second = 1000;

// const mytime = setInterval(function() {
//     console.log('it is time')
// }, 3 * second);

// setTimeout( () => {
//     clearInterval(mytime);
// }, 10 * second);

const playerElement = document.createElement('img');

const obstacles = [createObstacle(300), createObstacle(600)];

function createObstacle(leftValue) {
    const obstacle = document.createElement('div');

    obstacle.style.backgroundColor = 'red';
    obstacle.style.position = 'absolute';
    obstacle.style.width = '20px';
    obstacle.style.height = '20px';
    obstacle.style.top = '275px';
    obstacle.style.left = leftValue + 'px';
    obstacle.location = leftValue;
    document.body.appendChild(obstacle);
    return obstacle;
}

document.body.appendChild(playerElement);

playerElement.style.height = '100px';
playerElement.style.width = '100px';
playerElement.src = 'https://cdn.dribbble.com/users/19482/screenshots/2466218/frog-dribbble.gif';
playerElement.style.position = 'absolute';
playerElement.style.left = '200px';
playerElement.style.top = '200px';




let jumpValue = 0;
let direction = -10;
const screenWidth = document.body.clientWidth;


setInterval(function() {

    if (direction === -10) {
        move('left', -10);
        if (getLeftValue() < 0) {
            direction = 10;
        }
    } else {
        
        move('left', 10);

        if (getLeftValue() > screenWidth - 100) {
            direction = -10;
        }
    }

    hitDetection();
   
}, 100)

document.addEventListener('keydown', function(event) {
    console.log(event);
    switch(event.code) {
        case 'ArrowUp':
            move('top', -10);
            break;
        case 'ArrowDown':
            move('top', 10);
            break;  
        case 'ArrowLeft':
        
            move('left', -10);
            break; 
        case 'ArrowRight':
            move('left', 10)
            break; 
        case 'Space':
            jump();
            break; 
    }
});

const myArray = [1,2, 3];
myArray[0]

const user = {username: 'testuser'}
user['username'];
function move(prop, distance) {
    if (direction < 0 ) {
        playerElement.style.transform = 'scaleX(-1)'
    } else {
        playerElement.style.transform = 'scaleX(1)'
    }
    currentValue  = parseInt(playerElement.style[prop]);
    playerElement.style[prop] = currentValue + distance + 'px';
}

function getLeftValue() {
    return parseInt(playerElement.style['left'])
}


function getTopValue() {
    return parseInt(playerElement.style['top'])
}


let jumpDirection = 0;
function jump() {

    console.log(getTopValue());

    if (getTopValue() === 200) {
        jumpDirection = -20;
        let myInterval = setInterval(() => {
            move('top', jumpDirection);

            console.log()

            if (getTopValue() <  100) {
                jumpDirection = 20;
            }
            if (getTopValue() >  200) {
                jumpDirection = 0;
                playerElement.style.top = '200px';
                clearInterval(myInterval);
            }

        }, 100) 
       
       
    }
 
}


function hitDetection() {
    obstacles.forEach((obstacle) => {
        console.log(obstacle.location);

        if (direction > 0 ) {
            if (getLeftValue() + 70 === obstacle.location && getTopValue() > 180) {
                alert('you hit the obstacle')
            }
        } else {
            if (getLeftValue() === obstacle.location && getTopValue() > 180) {
                alert('you hit the obstacle')
            }

        }
      


    })
}