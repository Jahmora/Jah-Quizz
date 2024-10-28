let questionCount = 0;
let score = 0;
let totalQuestions = 0;

const correctSound = new Audio('correct.mp3');
const incorrectSound = new Audio('incorrect.mp3');

// Référence aux éléments pour éviter les répétitions
const intro = document.querySelector('.intro');
const startContainer = document.getElementById('start-container');
const gameContainer = document.querySelector('.game-container');
const endScreen = document.querySelector('.end-screen');
const resultElement = document.getElementById('result');
const scoreElement = document.getElementById('score');

// Affiche l'écran d'introduction pendant 10 secondes
setTimeout(() => {
    toggleVisibility(intro, false);
    toggleVisibility(startContainer, true);
}, 10000); // 10 secondes

// Gère la visibilité des éléments
function toggleVisibility(element, isVisible) {
    element.classList.toggle('show', isVisible);
    element.classList.toggle('hidden', !isVisible);
}

// Logique pour démarrer le jeu
document.getElementById('start').addEventListener('click', () => {
    const level = document.getElementById('level').value;

    if (!questions['fr'][level]) {
        alert("Niveau invalide. Veuillez sélectionner un niveau valide.");
        return;
    }

    toggleVisibility(startContainer, false);
    toggleVisibility(gameContainer, true);

    totalQuestions = questions['fr'][level].length;

    displayQuestion(questions['fr'][level][questionCount]);
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

    choicesButtons.forEach(button => {
        button.classList.remove('correct-animation', 'incorrect-animation'); // Réinitialiser les animations
    });

    if (selected === correct) {
        score++;
        resultElement.innerText = 'Correct !';
        correctSound.play();
        choicesButtons[selected].classList.add('correct-animation'); // Animation pour la réponse correcte
    } else {
        resultElement.innerText = 'Incorrect !';
        incorrectSound.play();
        choicesButtons[selected].classList.add('incorrect-animation'); // Animation pour la réponse incorrecte
    }

    scoreElement.innerText = `Score : ${score}`;
    document.querySelector('.score-fill').style.width = `${(score / totalQuestions) * 100}%`;

    // Créer un conteneur de chargement
    const loadingContainer = document.createElement('div');
    loadingContainer.className = 'loading-container';

    // Message de chargement
    const loadingMessage = document.createElement('div');
    loadingMessage.innerText = 'Chargement de la prochaine question...';
    loadingMessage.className = 'loading-message';
    loadingContainer.appendChild(loadingMessage);

    // Barre de chargement
    const loadingBar = document.createElement('div');
    loadingBar.className = 'loading-bar';
    const loadingFill = document.createElement('div');
    loadingFill.className = 'loading-fill';
    loadingBar.appendChild(loadingFill);
    loadingContainer.appendChild(loadingBar);
    gameContainer.appendChild(loadingContainer);

    // Remplir la barre de chargement progressivement
    for (let i = 0; i <= 100; i++) {
        await new Promise(resolve => setTimeout(resolve, 10)); // 10ms pour un effet plus fluide
        loadingFill.style.width = `${i}%`; // Met à jour la largeur de la barre
    }

    // Retirer le conteneur de chargement
    loadingContainer.remove();

    // Avancer à la prochaine question
    questionCount++;
    const level = document.getElementById('level').value;
    if (questionCount < totalQuestions) {
        displayQuestion(questions['fr'][level][questionCount]);
    } else {
        endGame();
    }
}

// Fonction pour terminer le jeu
function endGame() {
    toggleVisibility(gameContainer, false);
    toggleVisibility(endScreen, true);
    document.getElementById('final-score').innerText = `Votre score : ${score} / ${totalQuestions}`;
}

// Fonction pour réinitialiser le jeu
function resetGame() {
    questionCount = 0;
    score = 0;
    scoreElement.innerText = `Score : 0`;
    document.querySelector('.score-fill').style.width = '0%';
    toggleVisibility(endScreen, false);
    toggleVisibility(startContainer, true);
}

// Événements pour rejouer et retourner au menu principal
document.getElementById('play-again').addEventListener('click', resetGame);
document.getElementById('menu').addEventListener('click', resetGame);

