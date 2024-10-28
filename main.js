// main.js

let questionCount = 0;
let score = 0;
let totalQuestions = 0;

const correctSound = new Audio('correct.mp3');
const incorrectSound = new Audio('incorrect.mp3');

// Détecte la langue du navigateur ou utilise 'fr' par défaut
let language = navigator.language.startsWith('fr') ? 'fr' : 'en';

// Charge les traductions de texte
function loadTexts() {
    document.querySelector('h1').innerText = translations[language].welcome;
    document.querySelector('label[for="level"]').innerText = translations[language].chooseLevel;
    document.getElementById('level').options[0].text = translations[language].easy;
    document.getElementById('level').options[1].text = translations[language].medium;
    document.getElementById('level').options[2].text = translations[language].hard;
    document.getElementById('score').innerText = `${translations[language].score}: 0`;
    document.querySelector('.end-screen h2').innerText = translations[language].endGame;
    document.getElementById('play-again').innerText = translations[language].playAgain;
    document.getElementById('menu').innerText = translations[language].backToMenu;
}

// Affiche l'écran d'introduction pendant 10 secondes
setTimeout(() => {
    toggleVisibility(intro, false);
    toggleVisibility(startContainer, true);
}, 10000);

// Gère la visibilité des éléments
function toggleVisibility(element, isVisible) {
    element.classList.toggle('show', isVisible);
    element.classList.toggle('hidden', !isVisible);
}

// Logique pour démarrer le jeu
document.getElementById('start').addEventListener('click', () => {
    const level = document.getElementById('level').value;

    if (!questions[language][level]) {
        alert("Niveau invalide. Veuillez sélectionner un niveau valide.");
        return;
    }

    toggleVisibility(startContainer, false);
    toggleVisibility(gameContainer, true);

    totalQuestions = questions[language][level].length;
    displayQuestion(questions[language][level][questionCount]);
});

// Fonction pour afficher une question
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

// Fonction pour gérer les réponses
async function handleAnswer(selected, correct) {
    const choicesButtons = document.querySelectorAll('.choices-button');

    if (selected === correct) {
        score++;
        resultElement.innerText = 'Correct !';
        correctSound.play();
    } else {
        resultElement.innerText = 'Incorrect !';
        incorrectSound.play();
    }

    scoreElement.innerText = `${translations[language].score}: ${score}`;
    document.querySelector('.score-fill').style.width = `${(score / totalQuestions) * 100}%`;

    // Avance à la question suivante
    questionCount++;
    const level = document.getElementById('level').value;
    if (questionCount < totalQuestions) {
        displayQuestion(questions[language][level][questionCount]);
    } else {
        endGame();
    }
}

// Fonction pour terminer le jeu
function endGame() {
    toggleVisibility(gameContainer, false);
    toggleVisibility(endScreen, true);
    document.getElementById('final-score').innerText = `${translations[language].score}: ${score} / ${totalQuestions}`;
}

// Initialisation des textes au chargement
document.addEventListener('DOMContentLoaded', loadTexts);
