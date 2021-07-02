document.title = 'Tip Calculator';

const h1 = document.querySelector('h1');
h1.innerText = 'Tip Calculator';


const totalInput = document.createElement('input');
totalInput.type = 'number';
totalInput.placeholder = 'Enter Total';


const percentageInput = document.createElement('input');
percentageInput.type = 'number';
percentageInput.placeholder = 'What Percent?';

const tipButton = document.createElement('button');
tipButton.innerHTML = 'Tip'




document.body.appendChild(totalInput);
document.body.appendChild(percentageInput);
document.body.appendChild(tipButton);

