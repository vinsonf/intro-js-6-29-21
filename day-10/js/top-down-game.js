// const second = 1000;

// const mytime = setInterval(function() {
//     console.log('it is time')
// }, 3 * second);

// setTimeout( () => {
//     clearInterval(mytime);
// }, 10 * second);

const playerElement = document.createElement('img');

document.body.appendChild(playerElement);

playerElement.style.height = '200px';
playerElement.style.width = '200px';
playerElement.src = 'https://cdn.dribbble.com/users/19482/screenshots/2466218/frog-dribbble.gif';
playerElement.style.position = 'absolute';
playerElement.style.left = '200px';
playerElement.style.top = '200px';







setInterval(function() {
//    move('left', -10);
}, 100)

document.addEventListener('keydown', function(event) {
    console.log(event);

    let currentValue = 0;
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
    }
});

const myArray = [1,2, 3];
myArray[0]

const user = {username: 'testuser'}
user['username'];
function move(prop, distance) {
    if (prop === 'left' && distance < 0) {
        playerElement.style.transform = 'scaleX(-1)'
    } else {
        playerElement.style.transform = 'scaleX(1)'
    }
    currentValue  = parseInt(playerElement.style[prop]);
    playerElement.style[prop] = currentValue + distance + 'px';
}