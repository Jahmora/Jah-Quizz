let questionCount = 0;
let score = 0;
let totalQuestions = 0;

const correctSound = new Audio('correct.mp3');
const incorrectSound = new Audio('incorrect.mp3');

// Détecte la langue du navigateur ou utilise 'fr' par défaut
let language = navigator.language.startsWith('fr') ? 'fr' : 'en';

document.addEventListener('DOMContentLoaded', () => {
    loadTexts(); // Charge les textes en fonction de la langue

    // Démarre le jeu après l'écran d'introduction
    setTimeout(() => {
        toggleVisibility(document.querySelector('.intro'), false);
        toggleVisibility(document.getElementById('start-container'), true);
    }, 10000);

    document.getElementById('start').addEventListener('click', startGame);
    document.getElementById('play-again').addEventListener('click', resetGame);
    document.getElementById('menu').addEventListener('click', resetGame);
});

function loadTexts() {
    document.getElementById('welcome-message').innerText = translations[language].welcome;
    document.getElementById('level-label').innerText = translations[language].chooseLevel;
    document.getElementById('level').options[0].text = translations[language].easy;
    document.getElementById('level').options[1].text = translations[language].medium;
    document.getElementById('level').options[2].text = translations[language].hard;
    document.getElementById('score').innerText = `${translations[language].score}: 0`;
    document.getElementById('end-game-message').innerText = translations[language].endGame;
    document.getElementById('play-again').innerText = translations[language].playAgain;
    document.getElementById('menu').innerText = translations[language].backToMenu;
}

function toggleVisibility(element, isVisible) {
    element.classList.toggle('show', isVisible);
    element.classList.toggle('hidden', !isVisible);
}

function startGame() {
    const level = document.getElementById('level').value;
    questionCount = 0;
    score = 0;
    totalQuestions = questions[language][level].length;

    if (!questions[language][level]) {
        alert(translations[language].invalidLevel || "Niveau invalide sélectionné");
        return;
    }

    toggleVisibility(document.getElementById('start-container'), false);
    toggleVisibility(document.querySelector('.game-container'), true);
    displayQuestion(questions[language][level][questionCount]);
}

function displayQuestion(question) {
    document.getElementById('question').innerText = question.question;
    const choicesElement = document.getElementById('choices');
    choicesElement.innerHTML = '';

    question.choices.forEach((choice, index) => {
        const button = document.createElement('button');
        button.innerText = choice;
        button.className = 'choices-button button';
        button.onclick = () => handleAnswer(index, question.answer);
        choicesElement.appendChild(button);
    });
}

async function handleAnswer(selected, correct) {
    if (selected === correct) {
        score++;
        document.getElementById('result').innerText = 'Correct !';
        correctSound.play();
    } else {
        document.getElementById('result').innerText = 'Incorrect !';
        incorrectSound.play();
    }

    document.getElementById('score').innerText = `${translations[language].score}: ${score}`;
    questionCount++;

    const level = document.getElementById('level').value;
    if (questionCount < totalQuestions) {
        displayQuestion(questions[language][level][questionCount]);
    } else {
        endGame();
    }
}

function endGame() {
    toggleVisibility(document.querySelector('.game-container'), false);
    toggleVisibility(document.querySelector('.end-screen'), true);
    document.getElementById('final-score').innerText = `${translations[language].score}: ${score} / ${totalQuestions}`;
}

function resetGame() {
    questionCount = 0;
    score = 0;
    document.getElementById('score').innerText = `${translations[language].score}: 0`;
    toggleVisibility(document.querySelector('.end-screen'), false);
    toggleVisibility(document.getElementById('start-container'), true);
}
