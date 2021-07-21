const BASE_URL = 'http://fea2d139a33e.ngrok.io';
const FACTS_ENDPOINT = '/facts';
const USERS_ENDPOINT = '/users';
const REGISTER_ENDPOINT = '/register';
const LOGIN_ENDPOINT = '/login';

const username = document.querySelector('#username');
const registerButton = document.querySelector('#register');
const loginButton = document.querySelector('#login');

registerButton.addEventListener( 'click', register);
loginButton.addEventListener('click', login);




function post(endpoint, data) {
    return fetch(BASE_URL + endpoint, 
        {
            method: "POST",
            body: JSON.stringify(data),
            headers: {
                'content-type': 'application/json'
            }
        })
    .then( res => {
        return res.json();
    })
}

function get(endpoint) {
    return fetch(BASE_URL + endpoint)
    .then(function(res) {return res.json();})
}


function register() {
    post(REGISTER_ENDPOINT, {username: username.value})
    .then( function (data) {
       console.log(data);
    });
}

function login() {
    post(LOGIN_ENDPOINT, {username: username.value, password: 'password'}).then( data => console.log(data));
}



