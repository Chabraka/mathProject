
let lifePV = 150;
let money = 100;
let maxLifePV = 200;

const artefacts = [];
let defense = 0;
let equipmentDef = "T-shirt"
let attaque = 0;
let equipmentAtt = "Stylo"

let background = 'images/background/room.gif';

// Début chaine de Markov
let bernNumber = bernouilli(1/2, Math.random());

// Écouteurs d'événements pour les options de dialogue
document.querySelector('#dialogueOptions').addEventListener('click', function(event) {
    const option = event.target.textContent;
    if (option === 'Rentrer chez soi') {
        goBackHome();
    } else if (option === 'Avancer') {
        advanceInForest();
    }
});


// Fonction pour commencer le jeu
function startGame() {    
    // Options initiales
    lifePV = 150;
    money = 1000;
    maxLifePV = 200;
    updateStats();
    changeBackground(background);
    showMessage('Bienvenue dans Fantastic Adventure ! Choisissez votre prochaine action.');
    showOptions(['Rester chez soi', 'Sortir']);

    // Écouteur d'événement pour le bouton de sortie
    document.querySelector('.fa-xmark').addEventListener('click', function() {
        // Mettez ici votre code pour gérer la sortie du jeu
    });

    // Écouteur d'événement pour le bouton des statistiques
    document.querySelector('.fa-signal').addEventListener('click', function() {
        // Mettez ici votre code pour afficher les statistiques du joueur
    });

    // Écouteurs d'événements pour les options de dialogue
    document.querySelector('#dialogueOptions').addEventListener('click', function(event) {
        const option = event.target.textContent;
        if (option === 'Rester chez soi') {
            stayHome();
        } 
        else if (option === 'Sortir') {
            goOutside();
        }
        else if (option === 'Avancer') {
            advanceInForest(bernNumber);
        }
        else if (option === 'Rentrer chez soi') {
            goBackHome();
        }
        else if (option === 'Réessayer') {
            startGame();
        }
        
    });

    
}


// Démarrer le jeu
startGame();