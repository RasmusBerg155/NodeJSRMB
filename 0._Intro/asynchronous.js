// why:
// since javascript is single-threaded (erverything runs on the main thread)
// we want to avoid blocking

const { start } = require("repl")

// when
// requesting (over a network)
// database
// user input
// I/O (file handling)

// Promies can be in 2 states
// pending
// fulfilled
    // resolved / rejected

/* new Promise((resolve, reject) => {
    setTimeout(() => {
        try {
            throw new Error("shoot")
            resolve("Everything went well")
        } catch {
            reject("OH NO!")
        }
        resolve("Everything went well")
    }, 4000)
}) 
.then(message => console.log("The message is:", message))
.catch(errorMessage => console.log("Error was:", errorMessage)) */

/* Create a promise that resolves with "Noice" or rejects with "Damn */
function nodeIsAMood(){
    return new Promise((resolve, reject) => {
        setTimeout(() =>{
            try {
                resolve("Noice")
            } catch {
                reject("Damn")
            }
        }, 3000) 
    })
}

// console.log(nodeIsAMood())

// handle the promise

/* nodeIsAMood()
.then(console.log)
.catch(console.log)*/

(async function asynchronousFunction() {
    const message = await nodeIsAMood()
    console.log(message)
})()