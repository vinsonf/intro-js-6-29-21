const inputs = document.querySelectorAll('input');
console.log(inputs);

const streetNumberInput = inputs[0];
const streetNameInput = inputs[1];
const cityInput = inputs[2];
const select = document.querySelector('select');

streetNumberInput.addEventListener('change', function() {
    console.log(this.value);
    if(this.value && parseInt(this.value)) {
        console.log('yay you type anything and it was a number');
    }
});
streetNameInput.addEventListener('change', function() {
    console.log(this.value);
    this.value || streetNumberInput.value ? console.log('you typed something') : alert('Boo!')
});
cityInput.addEventListener('change', function() {
    console.log(this.value);
    if (this.value) {
        console.log('yay you type anything');
    } else if(streetNameInput.value !== 'abc') {
        alert('Boo!')
    }
});
select.addEventListener('change', function() {
    console.log(this.value);
    switch(this.value) {
        case 'ca':
            console.log('The Golden State');
            break;
        case 'az':
            console.log('The Grand Canyon State');
            break; 
        case 'ny':
            console.log('The Big Apple');
            break; 
        case 'or':
            console.log('The Beaver State');
            break; 

    }
});