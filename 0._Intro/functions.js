// create a function that is called greetings and prints out "Hello World";

function greetings() {
    console.log("Hello World");
}
//greetings();


// In Js we can have a function inside a constant
const newGreetings = function greetings() {
    console.log("Hello World")
}
//newGreetings();


// In JS can classes and functions be anonymous 
const anonymousFunctionGreeting = function () {
    console.log("Hello World")
}
//anonymousFunctionGreeting();

// create a function that is called interact. Its body is empty
function interact(anyFunctionReference){
    // Why callbacks? It allows the function run with default code
    // and when it's ready it calls OUR function that we give to it
    // imagine that before next line some code is running here...
    anyFunctionReference();
}

// this will print the reference. Leaving it empty will it as undefined
interact(anonymousFunctionGreeting);


// call interact with another interaction (any type of interaction is allowed)

/* interact(function poke() {
    console.log("Heya");
});*/

// task: defince a function inline in interact that does a new interaction
// task: bonus: can you remove more than I did in line 31-34

// interact(() => console.log("Kick"));

function interactWithSomeone(anyFunctionReference, name) {
    anyFunctionReference(name);
}

const callBackLater = (name) => console.log(`Hi, ${name}. I'm ready to help`);

// interactWithSomeone(callBackLater, "Rune");
// interactWithSomeone(callBackLater, "Bob");

const helpWithWorkLater = (name) => console.log(`Hello, ${name}. Ill help with homework later`);

interactWithSomeone(helpWithWorkLater, "Thomas");

interactWithSomeone()

interactWithSomeone(helpWithWorkLater, "Thomas");