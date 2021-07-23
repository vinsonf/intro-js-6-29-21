const array = [];
let answer = null;


// adds to back of array
array.push(1);

array.push(true);

// removes last item
array.pop();

answer = {
    0: 1,
    1: true,
    length: 2,
    push: function(item) {
        answer[answer.length] = item;
        answer.length++;
    },
    pop: function() {
        answer.length--;
        delete answer[answer.length];
        
    }

};


function addToFront(arr, item) {
    // add to beginning of array
    array.unshift(item);
}

// remove first item
array.shift();



addToFront(array, 'pure');

array.push('one', 2, true, false, 0);

array.splice(1, 1);


// array.forEach( function(item, index, self) {
//     console.log(item, index, self);
// });


// for(let index = -10; index < 100; index++) {
//     // console.log(array[index], index, array)
//     console.log(index, array[index]);
// }


for(let i = 0; i < 10; i++) {
 if (i === 2 || i === 4) {
     console.log('two or four')
 }
}

function fizzbuzz(starting, ending, fizz, buzz) {
 for(let i = starting; i <= ending;i++) {
     if (i % fizz === 0 && i % buzz === 0) {
         console.log('fizzbuzz');
     } else if( i % fizz === 0) {
        console.log('fizz');
     } else if( i % buzz === 0) {
         console.log('buzz');
     } else {
         console.log(i);
     }
 }
}

fizzbuzz(20, 50, 4, 7);



const user = {
    username: '',
    score: 0,
    role: 'ceo',
    doTaxes: function() {
        fizzbuzz(1, 100, 3, 7, 5);
    }
};
const user2 = {
    username: '',
    score: 0,
    role: 'ceo',
    doTaxes: function() {
        fizzbuzz(1, 100, 3, 7, 5);
    }
};

class User {
   points = 0;

    constructor(username = 'Joe',  role){
        this.name = username;
        this.role = role;
    }

    doTaxes(){
        fizzbuzz(1, 100, 3, 7, 5);
        console.log(this);
    } 

    getPoints() {
        this.points++;
        console.log(this.points)
    }

    get fullName () {
        return this.name + ' Smith'
    }
}
answer = [new User('vince',  'Ceo'), new User('Vinny', 'Client'), new User('Joe', 'Lead')];

console.log(array, answer, 4, 7);;