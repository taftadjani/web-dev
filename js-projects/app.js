const wordEl = document.getElementById('word');
const wrongLettersEl = document.getElementById('wrong-letters');
const playAgainBtn = document.getElementById('play-button');
const popup = document.getElementById('popup-container');
const notification = document.getElementById('notification-container');
const finalMessage = document.getElementById('final-message');

const figureParts = document.querySelectorAll('.figure-part');

const words = ['Taftadjani', 'Tafta', 'Moses', 'Acheikh', 'Jones', 'Walker', 'Nelson', 'Russell', 'Gibson', 'Nihal', 'Zineb', 'Dixon', 'Anas', 'Achraf', 'Zeroual', 'Tarik', 'Mabchour', 'Zenabou', 'Abdoulaye', 'Ahmadou', 'Mariam', 'Nafissa'];

let selectedWord = words[Math.floor(Math.random() * words.length)];

const correctLetters = [];
const wrongLetters = [];

// Show hidden word
function displayWord() {
    wordEl.innerHTML = `
                        ${
                            selectedWord
                                .split('')
                                .map(letter=>`
                                    <span class="letter">
                                        ${correctLetters.includes(letter)?letter:''}
                                    </span>
                                `).join('')}
                        `;
    const innerWord = wordEl.innerText.replace(/\n/g, '');

    if (innerWord === selectedWord) {
        finalMessage.innerText = 'Congratulations! You won! :)';
        popup.style.display = 'flex';
    }
}

// Update wrong letters el
function updateWrongLettersEl() {
    // Display wrong letters
    wrongLettersEl.innerHTML = `
        ${wrongLetters.length>0? '<p>Wrong</p>':''}
        ${wrongLetters.map(letter => `<span>${letter}</span>`)}
    `;

    // Display parts
    figureParts.forEach((part, index) => {
        const errors = wrongLetters.length;

        if (index < errors) {
            part.style.display = 'block';
            part.style.opacity = '1';
        } else {
            part.style.display = 'none';
        }
    });

    // 
    if (wrongLetters.length === 5) {
        // figureContainerEl.style.stroke = 'red';
        figureParts.forEach((part) => {
            part.style.stroke = 'red';
        });
    }

    // Check if lost
    if (wrongLetters.length === figureParts.length) {
        finalMessage.innerText = 'Unfortunately you lost.😕';
        popup.style.display = 'flex';
    }
}

// Show notification
function showNotification() {
    notification.classList.add('show');

    setTimeout(() => {
        notification.classList.remove('show');
    }, 2000);
}

// Keydown letter press

window.addEventListener('keydown', e => {
    if (e.keyCode >= 65 && e.keyCode <= 90) {
        const letter = e.key;
        if (selectedWord.includes(letter)) {
            if (!correctLetters.includes(letter)) {
                correctLetters.push(letter);
                displayWord();
            } else {
                showNotification();
            }
        } else {
            if (!wrongLetters.includes(letter)) {
                wrongLetters.push(letter);
                updateWrongLettersEl();
            } else {
                showNotification();
            }
        }
    }
});

// Restart game and play again
playAgainBtn.addEventListener('click', _ => {
    figureParts.forEach((part) => {
        part.style.stroke = '#fff';
        if (part.classList.contains('blink')) {
            part.classList.remove('blink');
        }
    });
    correctLetters.splice(0);
    wrongLetters.splice(0);
    selectedWord = words[Math.floor(Math.random() * words.length)];
    updateWrongLettersEl();
    displayWord();
    popup.style.display = 'none';
})

displayWord();