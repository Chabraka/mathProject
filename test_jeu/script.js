var output = document.getElementById('dialogue');
var characterImg = document.querySelector('#character img');
var hearts = document.getElementById('hearts');
var money = document.getElementById('money');
var backgroundImg = document.getElementById('background');
var dialogueOptions = document.getElementById('options');

var player = {
    name: '',
    hearts: 10,
    money: 100
};

function updateInterface() {
    hearts.textContent = '♥'.repeat(player.hearts);
    money.textContent = '$' + player.money;
}

function stayAtHome() {
    output.innerHTML += '<br>Vous décidez de rester à la maison et vous vous reposez.';
    player.hearts = 10;
    output.innerHTML += '<br>Vos points de vie ont été restaurés.';
    updateInterface();
    backgroundImg.src = 'room.jpg';
    clearOptions();
    showOptions(['Sortir']);
}

function explore() {
    output.innerHTML += '<br>Vous décidez d\'explorer et vous traversez un portail mystérieux.';
    backgroundImg.src = 'portal.jpg';
    clearOptions();
    showOptions(['Rentrer chez vous', 'Continuer']);
}

function optionSelected(index) {
    var selectedOption = dialogueOptions.children[index].textContent;
    output.innerHTML += '<br>Vous choisissez : ' + selectedOption;
  
    if (selectedOption === 'Sortir') {
        explore();
    } else if (selectedOption === 'Rentrer chez vous') {
        returnHome();
    } else if (selectedOption === 'Continuer') {
        // Ajoutez ici la logique pour continuer l'aventure
    }
}

function clearOptions() {
    dialogueOptions.innerHTML = '';
}

function showOptions(options) {
    for (var i = 0; i < options.length; i++) {
        var button = document.createElement('button');
        button.textContent = options[i];
        button.setAttribute('onclick', 'optionSelected(' + i + ')');
        dialogueOptions.appendChild(button);
    }
}

function returnHome() {
    var lostHearts = Math.floor(Math.random() * 6);
    if (lostHearts > player.hearts) {
        lostHearts = player.hearts;
    }
    player.hearts -= lostHearts;
    if (player.hearts <= 0) {
        output.innerHTML += '<br>Vous êtes arrivé(e) chez vous, mais vous avez péri en chemin.';
        // Ajoutez ici la logique pour gérer le game over
    } else {
        output.innerHTML += '<br>Vous êtes arrivé(e) chez vous, mais vous avez rencontré des difficultés sur la route.';
        updateInterface();
        backgroundImg.src = 'room.jpg';
        clearOptions();
        showOptions(['Sortir']);
    }
}

// Début du jeu
function startGame() {
    output.innerHTML = 'Bienvenue dans le jeu textuel !';
    output.innerHTML += '<br>Vous êtes actuellement dans votre chambre. Que voulez-vous faire ?';
    updateInterface();
    clearOptions();
    showOptions(['Sortir']);
}

// Appel de la fonction de démarrage du jeu
startGame();