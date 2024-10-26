const correctSound = new Audio('correct.mp3');
const incorrectSound = new Audio('incorrect.mp3');

function detectLanguage() {
    const userLang = navigator.language || navigator.userLanguage;
    return userLang.includes('fr') ? 'fr' : 'en';
}

function showIntro() {
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
    setTimeout(() => showQuestion(level), 2000);
}

window.onload = function() {
    showIntro();
    document.getElementById('start').onclick = function() {
        const level = document.getElementById('level').value;
        this.style.display = 'none'; // Faire disparaître le bouton "Commencer"
        document.getElementById('start-container').style.display = 'none'; // Faire disparaître le conteneur de niveau
        showQuestion(level);
    };
};
