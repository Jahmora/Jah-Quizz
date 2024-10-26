// main.js

const correctSound = new Audio('correct.mp3');
const incorrectSound = new Audio('incorrect.mp3');
const introSound = new Audio('intro.mp3');

let score = 0; // Variable pour le score

function detectLanguage() {
    const userLang = navigator.language || navigator.userLanguage;
    return userLang.includes('fr') ? 'fr' : 'en';
}

function showIntro() {
    introSound.play();
    document.querySelector('.intro').classList.add('show');
    setTimeout(() => {
        document.querySelector('.intro').classList.remove('show');
        document.querySelector('.game-container').classList.add('show');
    }, 5000);
}

function showQuestion(level) {
    const lang = detectLanguage();
    const questionSet = questions[lang][level];
    const question = questionSet[Math.floor(Math.random() * questionSet.length)];
    document.getElementById('question').innerText = question.question;
    document.getElementById('choices').innerHTML = '';
    question.choices.forEach((choice, index) => {
        const button = document.createElement('button');
        button.innerText = choice;
        button.onclick = () => checkAnswer(index, question.answer, level);
        document.getElementById('choices').appendChild(button);
    });
}

function checkAnswer(selected, correct, level) {
    const result = document.getElementById('result');
    if (selected === correct) {
        correctSound.play();
        result.innerText = 'Correct!';
        score++; // Augmenter le score pour une réponse correcte
    } else {
        incorrectSound.play();
        result.innerText = 'Incorrect!';
    }
    updateScore(); // Mettre à jour l'affichage du score
    setTimeout(() => showQuestion(level), 2000);
}

function updateScore() {
    document.getElementById('score').innerText = `Score: ${score}`; // Mettre à jour l'affichage du score
}

window.onload = function() {
    showIntro();
    document.getElementById('start').onclick = function() {
        const level = document.getElementById('level').value;
        this.style.display = 'none'; // Faire disparaître le bouton "Commencer"
        document.querySelector('label[for="level"]').style.display = 'none'; // Faire disparaître le label "Choisissez un niveau"
        showQuestion(level);
    };
    
    document.getElementById('restart').onclick = function() {
        score = 0; // Réinitialiser le score
        updateScore();
        document.getElementById('end-screen').style.display = 'none'; // Masquer l'écran de fin
        document.getElementById('start').style.display = 'block'; // Afficher le bouton "Commencer"
        document.querySelector('label[for="level"]').style.display = 'block'; // Afficher à nouveau le label
        document.querySelector('.game-container').classList.remove('show'); // Masquer le conteneur de jeu
        showIntro(); // Afficher l'introduction à nouveau
    };
};
