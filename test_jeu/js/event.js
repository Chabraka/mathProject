

// Fonction pour rester chez soi
function stayHome() {
    lifePV = maxLifePV;
    updateStats();
    changeBackground('images/background/room.gif');
    showMessage('Vous vous reposez chez vous.');
}

// Fonction pour rentrer chez soi depuis la forêt
function goBackHome() {
    clearImage();
    const maxLostPv = Math.floor(maxLifePV / 3); // Quantité maximale de points de vie que l'on peut perdre
    const heartsLost = Math.floor(Math.random() * (maxLostPv + 1)); // Perdre un nombre aléatoire de points de vie entre 0 et maxLostPv
    
    lifePV -= heartsLost;
    
    if (lifePV <= 0) {
        // Game over
        GameOver();
    } else {
        // Réussite du voyage retour
        updateStats();
        changeBackground('images/background/room.gif');
        
        let message = 'Vous êtes rentré chez vous';
        
        if (heartsLost === 0) {
            message += ' sain et sauf.';
        } else if (heartsLost <= maxLifePV*0.10) {
            message += ' mais vous avez rencontré quelques difficultés.';
        } else if (heartsLost > maxLifePV*0.10 && heartsLost <= maxLifePV*0.20) {
            message += ' mais vous avez rencontré des difficultés.';
        } else {
            message += ' mais vous avez rencontré beaucoup de difficultés.';
        }
        
        showMessage(message);
        showOptions(['Rester chez soi', 'Sortir']);
    }
}


// Fonction pour sortir
function goOutside() {
    changeBackground('images/background/portail.jpg');
    showMessage('Vous découvrez un portail.');
    showOptions(['']);
    setTimeout(function() {
        changeBackground('images/background/foret.jpg');
        showMessage('Poussez par la curiosité, vous êtes rentré dans le portail');
        showOptions(['Avancer', 'Rentrer chez soi']);
    }, 2000);
}



// Fonction pour avancer dans la forêt
async function advanceInForest() {
    clearImage();
    showMessage("Vous décidez d'avancer.")
    showOptions(['']);

    console.log(eventInProgress);
    await delay(1700);

    const encounter = Math.random(); // Générer un nombre aléatoire entre 0 et 1

    if (encounter < 1 / 3) {
    // Rencontrer un personnage
    meetCharacters()
    } else {
    // Rencontrer un monstre
    meetCharacters()
    //meetMonsters()
    }

}





function GameOver() {
    clearImage();
    lifePv=0;
    updateStats();
    changeBackground('images/background/monster.png');
    showMessage('Game over - Vous n\'avez pas survécu au voyage.');
    showOptions(['Réessayer']);
}