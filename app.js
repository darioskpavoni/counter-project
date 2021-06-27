/* // MY VERSION

// Selectors
const decrease = document.querySelector('.decrease');
const reset = document.querySelector('.reset');
const increase = document.querySelector('.increase');
const counter = document.getElementById('value');

// Variables
var counterValue = 0;

// Event listeners
decrease.addEventListener('click',decreaseCounter);
reset.addEventListener('click',resetCounter);
increase.addEventListener('click',increaseCounter);

// Functions
function decreaseCounter() {
    counterValue--;
    counter.textContent = counterValue;
    if (counterValue < 0) {
        counter.style.color = 'red';
    } else if (counterValue === 0) {
        counter.style.color = '#102A42';
    }
}

function resetCounter() {
    counterValue = 0;
    counter.textContent = counterValue;
    counter.style.color = '#102A42';
}

function increaseCounter() {
    counterValue++;
    counter.textContent = counterValue;
    if (counterValue > 0) {
        counter.style.color = 'green';
    } else if (counterValue === 0) {
        counter.style.color = '#102A42';
    }
} */

/* TUTORIAL VERSION */
// Selectors
const counter = document.getElementById('value');
const btns = document.querySelectorAll('.btn'); // selects all the buttons with 'btn' class. Returns a NodeList.

// Variables
let counterValue = 0;  

// Event listener + function
btns.forEach(function(btn) {
    btn.addEventListener('click', function(e) { 
        const styles = e.currentTarget.classList;
        // Changing the counter's value
        if (styles.contains('decrease')) {
            counterValue--;
        } else if (styles.contains('increase')) {
            counterValue++;
        }
        else {
            counterValue = 0;
        }
        counter.textContent = counterValue;
        // Changing the counter's color
        if (counterValue > 0){
            counter.style.color = 'green';
        } else if (counterValue < 0) {
            counter.style.color = 'red';
        } else {
            counter.style.color = '#102A42';
        }
    })
})