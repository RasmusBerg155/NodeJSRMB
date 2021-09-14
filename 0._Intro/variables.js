// use strict fanger fejl eller dårlige praksisser igennem programmet.
// "use strict";

// const message = "Hello World";  Det er en "Constant variable der ikke kan ændres senere"
// delete message; dette vil blive fanget af "use strict"

// insane variable = "This is not good";  Aldrig brug udefineret variabler som denne. 

let word = "Clippie wants to help youuuuuuuuuuuu~";


let age = 27;

/* console.log(age++);
console.log(age); */

const person = {
     name: "Rasmus"
};

// This can be done even though the object is const, because its only the object being const and not its values.
person.name = "John";
person.favoriteFood = "Lasagne";
delete person.favoriteFood;
// console.log(person);

// I can't do the 2 following
// person = {sound: "bzzzz"};
// delete person;

//Useing the following will "Freeze" the object, meaning its variables cannot be changed later on
const immutablePerson = Object.freeze(person);
immutablePerson.name = "New Name";

// console.log(immutablePerson);

//Never use var (anymore)
var oldSchoolJavascript = -10;


// working with scopes, lets create a new one.
// let holder sig inde for sit scope og derfor vil de udvendige scope stadig være "Some Value" Selvom vi ændre den i det andet scope.
{
     let someValue = "Some Value";
     {
          let someValue = "Other value";
          //console.log(someValue);
     }
     // console.log(someValue);
}

/*
var er en global variable derfor, vil printet her være: "False, False" idet den globable variable ændres.
{
     var someValue = true;
     {
          var someValue = false;
          console.log(someValue);
     }
     console.log(someValue);
} */

// task write a for-loop
// I dette forloop vil printen være 123456, som man ville tro
for (let i = 0; i <= 5; i++){
     setTimeout(function runAfterTheLoop() {
         // console.log(i);
     }, 1000);
}

// Hvis man bruger var som er global, vil for loopet nå at køre igennem før timeout er færdig, derved vil outputtet være 666666.
// I en jobsamtale ville spørgsmålet være hvordan man løser dette problem, og svaret ville være at ændre "var" til "let"
for (var i = 0; i <= 5; i++){
     setTimeout(function runAfterTheLoop() {
          console.log(i);
     }, 1000);
}