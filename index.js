// intialize the count as 0
// listen for clicks on the increment button
// increment the count variable when the button is clicked
// change the count-el in the HTML to reflect the new count

let saveEl = document.getElementById("save-el")
let countEl = document.getElementById("count-el")


let count = 0

function increment() {
    count += 1
    countEl.textContent = count
}

function save() {
    let numDash = count +  " - "
    saveEl.textContent += numDash 
    countEl.textContent = 0
    count = 0
}



//let welcomeEl = document.getElementById("welcome-el")

//let name = "Shelby Renee Jones"
//let greeting = "Welcome back "

//welcomeEl.innerText = greeting + name 