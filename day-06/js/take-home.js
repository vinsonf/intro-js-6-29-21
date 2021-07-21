const BASE_URL = 'http://c0b23c3ae165.ngrok.io';
const FACTS_ENDPOINT = '/facts';
const USERS_ENDPOINT = '/users';

fetch(BASE_URL + FACTS_ENDPOINT).then( res => {
    return res.json();
}).then( function (facts) {
    const factsLength = facts.length;
    const randomNumber = Math.random() * factsLength;
    const flooredNumber = Math.floor(randomNumber);
    alert(facts[flooredNumber].text);
});