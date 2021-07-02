// These are primitive values, data structures, data types.

const tag = 'h1';
const fontSize = 30;
const isActive = true;

const object = {
    tag: 'li',
    fontSize: 30,
    isActive: true,
    innerHTML: '',
    innerText: '',
};

const array = [tag, fontSize, isActive];


// create an element
const differentButton = document.createElement(object.tag);

// place element on the body


// update the innerHTML of button
differentButton.innerHTML = 'second button';


// create a variable that point to a different variable

const myButton = document.querySelector('button');
// const myButton = differentButton;

document.body.appendChild(differentButton);


// changing styles on the button
myButton.style.color = 'green';
myButton.style.fontSize = fontSize + 'px';


// changing the text or html of a button
myButton.innerText = '<h1 >Changed </h1>';
myButton.innerHTML = '<h2 style="color: pink" >Different</h2>';


myButton.addEventListener('mouseout', function() {
   myButton.appendChild(differentButton)
});

console.dir(myButton);
