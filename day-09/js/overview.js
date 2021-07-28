// Data types

const appName = 'App';
let score = 0;
var test = false;

const falseyGroup = [false, '', 0, undefined, null, NaN]; // array
const truthyGroup = ['everything else'];


const user = {
    username: 'joe',
    falseyGroup: falseyGroup,
    truthyGroup: truthyGroup,
    score: score
}
const user2 = {
    username: 'jim',
    falseyGroup: falseyGroup,
    truthyGroup: truthyGroup,
    score: score
}



// DRY

displayUser({x_user: user, y_propertyName: 'username'});
displayUser({ y_propertyName: 'score', x_user: user2});

function displayUser({ x_user, y_propertyName }) {
    const li1 = document.createElement('li');
    document.body.appendChild(li1);
    li1.innerText = x_user[y_propertyName];

    const {username} = x_user;
    console.log(username)
}






