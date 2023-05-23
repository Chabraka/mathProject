function meetCharacters() {
    const encounter = Math.random(); // Génère un nombre aléatoire entre 0 et 1
    let character = '';
    character = 'Soigneur'; // 10% de chance de rencontrer un soigneur
      


    // Déterminer le personnage rencontré en fonction de la loi de Poisson
    /*if (encounter < 0.4) {
      character = 'Marchand'; // 40% de chance de rencontrer un marchand
    } else if (encounter < 0.7) {
      character = 'Joueur'; // 30% de chance de rencontrer un joueur
    } else if (encounter < 0.9) {
      character = 'Aventurier'; // 20% de chance de rencontrer un aventurier
    } else {
      character = 'Soigneur'; // 10% de chance de rencontrer un soigneur
      meetSoigneur(); 
    }*/
  
    // Afficher le dialogue ou déclencher l'action correspondante au personnage rencontré
    showMessage('Vous rencontrez un ' + character + '.');
    meetSoigneur(); 
    // Mettez ici le code spécifique pour interagir avec le personnage rencontré
}

function meetSoigneur() {

    showMessage('Vous avez rencontré un soigneur.');
    showOptions(['']);

    setTimeout(function() {
        showMessage('Aventurier, vous semblez épuisé.');
        showOptions(['']);


    setTimeout(function() {

        const chanceSoignerGratuitement = Math.random() < 0.5;
  
      if (chanceSoignerGratuitement) {
        showMessage('Tenez, voici une potion de santé pour vous.');
        lifePV = maxLifePV;
        updateStats();
        showOptions(['Avancer', 'Rentrer chez soi']);

      } else {
        showMessage('Je peux vous soigner, mais cela coûtera 30 dollars.');
  
        showOptions(['Ne pas se soigner', 'Payer 30 dollars pour les soins']);
  
        // Écouteur d'événement pour les options de dialogue avec le soigneur
        document.querySelector('#dialogueOptions').addEventListener('click', function(event) {
          const option = event.target.textContent;
  
          if (option === 'Ne pas se soigner') {
            showMessage('Vous ne vous voulez pas être soigné. Vous décidez de partir.');
            showOptions(['Avancer', 'Rentrer chez soi']);

          } else if (option === 'Payer 30 dollars pour les soins') {
            if (money >= 30) {
              showMessage('Vous avez payé 30 dollars et êtes maintenant soigné.');
              money -= 30;
              lifePV = maxLifePV;
              updateStats();
              showOptions(['Avancer', 'Rentrer chez soi']);
            } else {
              showMessage('Malheureusement, vous n\'avez pas assez d\'argent pour payer les soins.');
              showOptions(['Avancer', 'Rentrer chez soi']);
            }
          }
        });
      }
      
    }, 1500);
      
    }, 1500);
  }
  
