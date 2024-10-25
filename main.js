// main.js

const correctSound = new Audio('correct.mp3');
const incorrectSound = new Audio('incorrect.mp3');
const introSound = new Audio('intro.mp3');

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
    // Cacher le bouton de démarrage et le sélecteur de niveau
    document.getElementById('start').style.display = 'none';
    document.getElementById('level').style.display = 'none';

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
    } else {
        incorrectSound.play();
        result.innerText = 'Incorrect!';
    }

    // Attendre que le son soit joué avant de changer la question
    const soundDuration = selected === correct ? correctSound.duration * 1000 : incorrectSound.duration * 1000;

    setTimeout(() => {
        result.innerText = ''; // Effacer le résultat
        showQuestion(level);
    }, soundDuration + 1000); // Ajout d'une seconde pour laisser le temps de lire le message
}

window.onload = function() {
    showIntro();
    document.getElementById('start').onclick = function() {
        const level = document.getElementById('level').value;
        showQuestion(level);
    };
};
