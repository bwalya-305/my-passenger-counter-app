// initialize the count as 0
// listen for clicks on the increment button
// increment the count variable when the button is clicked
// change the count-el in the html to reflect the new count

let countEl = document.getElementById("count-el") // grab the count-el element, store it in a countEl variable
let saveEl = document.getElementById("save-el") // grab the save-el element, store it in a saveEl variable
let count = 0

function increment() {
    count += 1
    countEl.textContent = count // set countEl's innerText to the count
}

// Create a function, save(), which logs out the count when it's called

function save() {
    let countStr = count + " - "
    saveEl.textContent += countStr
    countEl.textContent = 0
    count = 0
}