let currentChar = 'A';
let username = '';
let cycling = true;
let slotElement = document.getElementById('username-slot');
let usernameElement = document.getElementById('username');
let toggleButton = document.getElementById('toggle-button');
let nextButton = document.getElementById('next-button');

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
        nextButton.style.display = 'none';
        cycleLetter();
    } else {
        toggleButton.innerText = 'Restart Letter';
        nextButton.style.display = 'inline-block';
    }
}

function nextLetter() {
    const randomSize = Math.floor(Math.random() * 30) + 30; // Random size between 12px and 48px
    const newCharElement = document.createElement('span');
    newCharElement.innerText = currentChar;
    newCharElement.style.fontSize = randomSize + 'px';
    usernameElement.appendChild(newCharElement);
    username += currentChar;
    cycling = true;
    toggleButton.innerText = 'Stop Letter';
    nextButton.style.display = 'none';
}

function endInput() {
    alert('Your username is: ' + username);
}

function changeBackgroundColor() {
    const colors = ['#ff00ff', '#00ff00', '#ffff00', '#ff69b4', '#8b0000', '#ff4500'];
    document.body.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
}

setInterval(cycleLetter, 400);
setInterval(changeBackgroundColor, 100);
