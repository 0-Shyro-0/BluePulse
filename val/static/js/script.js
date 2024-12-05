let currentChar = 'A';
let username = '';
let cycling = true;
let slotElement = document.getElementById('username-slot');
let usernameElement = document.getElementById('username');
let toggleButton = document.getElementById('toggle-button');

function cycleLetter() {
    if (cycling) {
        currentChar = String.fromCharCode(65 + Math.floor(Math.random() * 26));
        slotElement.innerText = currentChar;
    }
}

function toggleCycling() {
    cycling = !cycling;
    if (cycling) {
        toggleButton.innerText = 'Stop Letter';
        cycleLetter();
    } else {
        toggleButton.innerText = 'Restart Letter';
    }
}

function nextLetter() {
    username += currentChar;
    usernameElement.innerText = username;
    cycling = true;
    toggleButton.innerText = 'Stop Letter';
}

function endInput() {
    alert('Your username is: ' + username);
}

setInterval(cycleLetter, 100);