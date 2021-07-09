// Logic

// if a:
if (true) {
    console.log('a: this code runs if true')
}

// if / else b:
if (true) {
    console.log('b: this code runs if true');
} else {
    console.log('b: this runs if false')
}

// ternary (similar to the above example)
true ? console.log('b1: this code runs if ternary is true') : console.log('b1: this runs if ternary is false')

// if /else if / else c:
if (false || false) {
    console.log('c: this code runs if true')
} else if (false) {
    console.log('c: this is second condiontion')
} else if (false) {
    console.log('c: this is third condiontion')
} else {
    console.log('c: this runs if false')
}



let favoriteFood = prompt('what is your favorite food');
document.addEventListener('click', function() {
    favoriteFood = prompt('what is your favorite food');
    switch(favoriteFood) {
        case 'Pizza':
            console.log('I love Pizza');
            break;
    
        case 'Burgers':
            console.log('Burgers are my second favorite');
            break;
        case 'Ice Cream':
            console.log('I like Ice cream but not all the time');
    
    
        default:
            console.log('I never tried ' + favoriteFood + ' before' )
    
    }
    
})


const HEALTH_METER = 100;

function takeDamage() {
    // let health = 100;
    health = health - 10;
    console.log('health' + '!', health, true, 1);
}

