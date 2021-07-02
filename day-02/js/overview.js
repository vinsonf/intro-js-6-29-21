// Primitive values

const strings = `yellow`;
let score = 0;
const boolean = false;
score = 100;

const objects = {
    strings: strings,
    score: score,
    boolean: boolean,
    body: {
        style: {
            backgroundColor: 'blue',
            color: 'purple'
        }
    },
    favoriteFoods: [{}]
}

const array = [strings, score, boolean, objects]

console.log(objects)


document.body.style.backgroundColor = 'pink';

const test = document.querySelector('h1');
test.style.fontSize = score + 'px';
test.style.backgroundColor = objects['body']['style']['backgroundColor'];
// test.style.color = objects.body.style.color;
test.innerText = strings;


score += 5;


score -= 7;
score *= 4;
score /= 4;
score %= 2;


const values = [5 + 5, 5-3, 5*2, 5 / 2, 32 % 8];
console.log(score);






