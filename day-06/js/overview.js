// Data Types

const appName = 'cool app';
const version = 1.1;
const production = false;

const favoriteVariables = [appName, version, production];
const array = {length: 3, 0: appName, 1: version, 2: production}

console.log(favoriteVariables.length, array.length)

const favoriteVariables2 = {
    favoriteString: appName,
    favoriteNumber: version,
    favoriteBoolean: production,
};

function myFunction(text, number) {
    const name = 'boy';
    console.log(name, text, number);
} 

myFunction('test1', 0.5);
const users = [];

const user1 = {
    username: 'Vinson',
    hairColor: 'Brown',
    favoriteColor: 'red',
    users: users
}
const user2 = {
    username: 'Joe',
    hairColor: 'Brown',
    favoriteColor: 'red',
    users: users
}
const user3 = {
    username: 'Moe',
    hairColor: 'Brown',
    favoriteColor: 'red',
    users
}



users.push(user1, user2, user3, users);


////////////array/user/array/user/string
console.log(users[3][2].username);

const users2 = {length: 3, 0: user1, 1: user2, 2: user3}


const myPromise = new Promise(function(resolve, reject) {
    // reject(new Error('No internet connection'))
    setTimeout(() => resolve("{\"username\":\"Jim\",\"password\":\"55555\"}"), 5000);

});
const myPromise2 = new Promise(function(resolve, reject) {
    reject(new Error('No internet connection'))
    setTimeout(() => resolve("{\"username\":\"Joe\",\"password\":\"55555\"}"), 10000);

});

Promise.all([myPromise, myPromise2]).then( data => {
    console.log('data', data);
}).catch(err => {
    console.log(err);
}).finally(() => console.log('finally'))