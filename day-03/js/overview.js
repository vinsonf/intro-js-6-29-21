function myFunction(text) {
  const yes = true;
  const no = false;

  const number1 = 1;
  const number2 = 2;
  const number3 = 3;

  const letterA = "a";
  const letterB = "b";
  const letterC = "c";

  const objects = {
    property: yes,
  };
  const user1 = {
    username: "Vinson",
    score: 100,
  };
  const user2 = {
    username: "Joe",
    score: 101,
  };
  const array = [];
  const users = [user1, user2];
  console.dir(document);
  console.dir(Math);
  console.dir(new Date());
  const div = document.querySelector("div");
  const h1 = document.querySelector("h1");
  div.innerHTML = "click";

  div.addEventListener("click", alert);
  console.dir(div);
  console.dir(h1);
  console.dir("test");
}

myFunction("test");
myFunction("works");

const test1 = alert("I am an alert");
const test2 = confirm("Is this ok? Are you sure?");
const test3 = prompt("What is your name?", "10");

console.log(test1, test2, test3);
