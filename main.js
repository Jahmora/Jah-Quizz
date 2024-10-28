// main.js

let questionCount = 0; // Compteur de questions
let score = 0; // Score du joueur
let totalQuestions = 0; // Nombre total de questions

const correctSound = new Audio('correct.mp3'); // Son pour réponse correcte
const incorrectSound = new Audio('incorrect.mp3'); // Son pour réponse incorrecte

// Détecte la langue du navigateur ou utilise 'fr' par défaut
let language = navigator.language.startsWith('fr') ? 'fr' : 'en';
const lang = 'fr'; // Changer la langue ici (fr ou en)

// Fonction pour afficher une notification temporaire
function showTemporaryNotification(message) {
    const notification = document.createElement('div');
    notification.classList.add('notification');
    notification.textContent = message;
    document.body.appendChild(notification);

    // Retirer la notification après 3 secondes
    setTimeout(() => {
        document.body.removeChild(notification);
    }, 3000);
}

// Appel de la fonction lors de l'ajout de nouvelles questions
function addNewQuestion(questionObj) {
    questions["fr"]["Facile"].push(questionObj["fr"]);
    questions["en"]["Easy"].push(questionObj["en"]);

    // Afficher la notification avec la traduction du message
    showTemporaryNotification(translations[lang].newQuestionAdded);
}

// Exemple d'ajout de question
const newQuestion = {
    "fr": {"question": "Quel est le premier jeu vidéo sorti?", "choices": ["Pong", "Tetris", "Space Invaders"], "answer": 0},
    "en": {"question": "What is the first video game released?", "choices": ["Pong", "Tetris", "Space Invaders"], "answer": 0}
};
addNewQuestion(newQuestion);

document.addEventListener('DOMContentLoaded', () => {
    loadTexts(); // Charge les textes en fonction de la langue

    // Démarre le jeu après l'écran d'introduction
    setTimeout(() => {
        toggleVisibility(document.querySelector('.intro'), false);
        toggleVisibility(document.getElementById('start-container'), true);
    }, 10000); // Temps d'attente de 10 secondes

    document.getElementById('start').addEventListener('click', startGame);
    document.getElementById('play-again').addEventListener('click', resetGame);
    document.getElementById('menu').addEventListener('click', resetGame);
});

// Fonction pour charger les textes en fonction de la langue
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

// Fonction pour changer la visibilité d'un élément
function toggleVisibility(element, isVisible) {
    element.classList.toggle('show', isVisible);
    element.classList.toggle('hidden', !isVisible);
}

// Fonction pour démarrer le jeu
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

// Fonction pour afficher une question
async function displayQuestion(question) {
    const loadingScreen = document.querySelector('.loading');
    toggleVisibility(loadingScreen, true); // Affiche l'écran de chargement

    // Simule un délai pour l'écran de chargement
    await new Promise(resolve => setTimeout(resolve, 1000));

    // Affiche la question après le délai
    loadingScreen.classList.remove('show');
    loadingScreen.classList.add('hidden');

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

// Fonction pour gérer la réponse d'un joueur
async function handleAnswer(selected, correct) {
    const loadingScreen = document.querySelector('.loading');
    toggleVisibility(loadingScreen, true); // Affiche l'écran de chargement

    // Simule un délai avant d'afficher le résultat
    await new Promise(resolve => setTimeout(resolve, 1000));

    if (selected === correct) {
        score++;
        document.getElementById('result').innerText = 'Correct !';
        correctSound.play();

        // Vérifiez si une nouvelle question doit être ajoutée après 10 bonnes réponses
        if (score % 10 === 0) { // Par exemple, chaque 10 bonnes réponses
            generateNewQuestion();
        }
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

// Fonction pour vérifier si la question existe déjà
function isQuestionExist(questionText) {
    for (const level in questions[language]) {
        for (const question of questions[language][level]) {
            if (question.question === questionText) {
                return true; // La question existe déjà
            }
        }
    }
    return false; // La question n'existe pas
}

// Fonction pour générer une nouvelle question
function generateNewQuestion() {
    const level = getCurrentLevel(); // Obtenez le niveau actuel
    const language = getCurrentLanguage(); // Obtenez la langue actuelle

    // Vérifiez que les questions existent pour ce niveau et cette langue
    if (questions[language] && questions[language][level]) {
        const questionArray = questions[language][level];
        const randomIndex = Math.floor(Math.random() * questionArray.length);
        const selectedQuestion = questionArray[randomIndex];

        // Assurez-vous que selectedQuestion est défini avant d'accéder à ses propriétés
        if (selectedQuestion) {
            displayQuestion(selectedQuestion); // Affiche la nouvelle question
        } else {
            console.error('Question sélectionnée est undefined');
        }
    } else {
        console.error('Niveau ou langue invalide');
    }
}

// Fonction pour obtenir le niveau actuel
function getCurrentLevel() {
    return document.getElementById('level').value; // Retourne le niveau sélectionné
}

// Fonction pour obtenir la langue actuelle
function getCurrentLanguage() {
    return language; // Utilise la variable language définie plus haut
}

// Fonction pour terminer le jeu
function endGame() {
    const loadingScreen = document.querySelector('.loading');
    toggleVisibility(loadingScreen, false); // Masquer l'écran de chargement
    toggleVisibility(document.querySelector('.game-container'), false);
    toggleVisibility(document.querySelector('.end-screen'), true);
    document.getElementById('final-score').innerText = `${translations[language].score}: ${score}`;
    document.getElementById('end-game-message').innerText = translations[language].endGame;
}

// Fonction pour réinitialiser le jeu
function resetGame() {
    toggleVisibility(document.querySelector('.end-screen'), false);
    toggleVisibility(document.getElementById('start-container'), true);
}

console.log('Current Level:', getCurrentLevel());
console.log('Current Language:', language);
console.log('Available Questions:', questions[language] && questions[language][getCurrentLevel()]);

