const BASE_URL = 'http://c0b23c3ae165.ngrok.io';
const FACTS_ENDPOINT = '/facts';
const USERS_ENDPOINT = '/users';
const REGISTER_ENDPOINT = '/register';
const LOGIN_ENDPOINT = '/login'


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

post(REGISTER_ENDPOINT, {username: 'vinson'})
.then( function (data) {
   console.log(data);
});

post(LOGIN_ENDPOINT, {username: 'vinson', password: 'password'}).then( data => console.log(data));