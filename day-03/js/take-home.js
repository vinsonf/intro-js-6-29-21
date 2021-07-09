// Ask for the user's first name
// const firstName = prompt('What is your first name?');
// // Ask for the user's last name
// const lastName = prompt('What is your last name');
// // Log the user's first name to the console
// console.log(firstName);
// // Alert the user's last name
// alert(lastName)

// *BONUS* 
// Ask for the user's birthday
const bDay = prompt('What is your Birthday');
// Ask the user to confirm their birthday input
// const correctBDay = confirm(bDay + '. Is this correct?');
const pattern = /[0-9][0-9]\/[0-9][0-9]\/[1-9][0-9][0-9][0-9]/;


console.log(pattern.test(bDay));

if (pattern.test(bDay)) {
  console.dir(new Date(bDay))
}

const splitBday = bDay.split('/');
const isBDayFormattedCorrectly = bDay.split('/').length === 3;
console.log(splitBday);

let isValid = true;

splitBday.forEach( function(part, index) {
  
  if ( isNaN( parseInt(part) ) ){
    isValid = false;
  }
  
  if (index === 0) {
    if (part.length !== 2 ) {
        isValid = false;
    }
   
  }
  if (index === 1) {
      if (part.length !==  2 ) {
        isValid = false;
    }
  }
  if (index === 2) {
      if (part.length !== 4) {
        isValid = false;
    }
    
  }
    
  
});

console.log('is valid', isValid)