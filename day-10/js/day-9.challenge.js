const form = document.createElement('form');
document.body.appendChild(form);


const usernameInput = addInput('input', 'Enter Usernae');
const emailInput = addInput('input', 'Enter Email');
const phoneNumberInput = addInput('input', 'Enter Address');
const submitButton = addButton('submit');

const userInfoElement = document.createElement('div');
const userNameElement = document.createElement('h1');
const phoneNumberElement = document.createElement('p');
const emailElement = document.createElement('p');
const restartButton = document.createElement('button');
document.body.appendChild(userInfoElement);

restartButton.innerHTML = 'Restart';

userInfoElement.appendChild(userNameElement);
userInfoElement.appendChild(phoneNumberElement);
userInfoElement.appendChild(emailElement);
userInfoElement.appendChild(restartButton);
userInfoElement.style.display = 'none';

restartButton.addEventListener('click', function() {
    toggleFormUserInfo();
    setInputValues('', '', '');
})



form.addEventListener('submit', function(event) {
    event.preventDefault();
    const username = form[0].value;
    const email = form[1].value;
    const phoneNumber = form[2].value;
    displayUserInfo(username, email, phoneNumber);
    toggleFormUserInfo();
})

function addInput(type, placeholder) {
    const input = document.createElement(type);
    form.appendChild(input);
    input.placeholder = placeholder;
}

function addButton(text){
    const button = document.createElement('button');
    form.appendChild(button);
    button.innerHTML = text;
    return button;
}

function displayUserInfo(username, email, phoneNumber) {
    userNameElement.innerText = username;
    emailElement.innerText = email;
    phoneNumberElement.innerText = phoneNumber;
}

function setInputValues(username, email, phoneNumber) {
    form[0].value = username;
    form[1].value = email;
    form[2].value = phoneNumber;
}

function toggleFormUserInfo() {

    if (form.style.display === 'none') {
        form.style.display = 'block';
        userInfoElement.style.display = 'none';
    } else {
        form.style.display = 'none';
        userInfoElement.style.display = 'block';
    }
   
}