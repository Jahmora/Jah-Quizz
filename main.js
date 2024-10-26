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
    
    // Cacher le bouton de démarrage et le menu de niveau après le début du quiz
    document.getElementById('start').style.display = 'none';
    document.getElementById('level').style.display = 'none';

    setTimeout(() => {
        result.innerText = ''; // Effacer le résultat précédent
        showQuestion(level); // Montrer la prochaine question
    }, 2000);
}

window.onload = function() {
    showIntro();
    document.getElementById('start').onclick = function() {
        const level = document.getElementById('level').value;
        showQuestion(level);
    };
};
