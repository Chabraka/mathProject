/* --- Player --- */
let lifePV = 150;
let money = 100;
let maxLifePV = 200;

const artefacts = [];
let defense = 0;
let equipmentDef = "T-shirt"
let attaque = 0;
let equipmentAtt = "Stylo"

// Image
let background = 'images/background/room.gif';

/* --- PARAMS --- */
let rademacherNumber = rademacher(1/2, Math.random()); // Début chaine de Markov
let paramMeetCharacters = 6 ;
let paramMeetMonsters = 0.35 ;
let paramRadeForCharacters = 1/3 ;
let paramRadeForMonsters = 1/2 ;

/* --- STATS --- */

let meetSomeone = 0;

// Meet humans
let meetHuman = 0;
let meetMarch = 0;
let meetJou = 0;
let meetAvent = 0;
let meetSoign = 0;
let soigneGratuitement = 0;

// Meet monsters
let meetMonster = 0;
let meetSlime = 0;
let meetGobelin = 0;
let meetOrc = 0;
let meetTroll = 0;
let meetGriffon = 0;
let meetDragon = 0;

// Fight
let choixAttaque = 0;
let infligeDegats = 0;
let prendDegats = 0;
let pasDegats = 0;
let choixFuite = 0;
let fuiteSafe = 0;

// Pierre-Feuille-Ciseaux
let nbGames = 0;
let nbSets = 0;
let nbGamesWon = 0;
let nbSetsWon = 0;
let nbSetsNull = 0;
let choixSets = [{1: 0}, {2: 0}, {3: 0}, {4: 0}, {5: 0}, {6: 0}];

// Écouteurs d'événements pour les options de dialogue
document.querySelector('#dialogueOptions').addEventListener('click', function(event) {
    const option = event.target.textContent;
    if (option === 'Rentrer chez soi') {
        goBackHome();
    } else if (option === 'Avancer') {
        advanceInForest(rademacherNumber);
    }
});

// Fonction pour commencer le jeu
function startGame() {    
    // Options initiales
    
    lifePV = 150;
    money = 100;
    maxLifePV = 200;

    paramMeetCharacters = 6 ;
    paramMeetMonsters = 0.35 ;
    paramRadeForCharacters = 0.33 ;
    paramRadeForMonsters = 1/2 ;
    updateStats();
    updateParams();
    //updateParams();
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

    // STATS
    const statsBtn = document.getElementById('statsBtn');
    const statsWindow = document.getElementById('statsWindow');
    const closeBtn = document.getElementById('closeBtn');

    statsBtn.addEventListener('click', () => {
        statsWindow.style.display = 'block';
    });

    closeBtn.addEventListener('click', () => {
        statsWindow.style.display = 'none';
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
            advanceInForest(rademacherNumber);
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