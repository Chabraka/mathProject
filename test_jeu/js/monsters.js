let eventInProgress2 = false; // Variable pour suivre si un événement est en cours

async function meetMonsters() {
  if (eventInProgress2) {
    return; // Si un événement est déjà en cours, ne pas déclencher une nouvelle rencontre
  }

  eventInProgress2 = true; // Marquer qu'un événement est en cours

  const monsters = [
    { name: 'Slime', pv: 10, att: 5},
    { name: 'Gobelin', pv: 20, att: 10},
    { name: 'Orc',  pv: 30, att: 20},
    { name: 'Troll', pv: 40, att: 30},
    { name: 'Griffon', pv: 50, att: 50},
    { name: 'Dragon', pv: 90, att: 100}
  ];
  
  const geoNumber = geometrique(0.4, Math.random());
  let monster = monsters[Math.min(geoNumber, 6) - 1];
  
    // Afficher le dialogue ou déclencher l'action correspondante au monstre rencontré
    showMessage('Vous rencontrez un ' + monster.name + '.');
    await delay(2000);

    // Mettez ici le code spécifique pour interagir avec le monstre rencontré
    showMessage('Que voulez-vous faire ?');
    showOptions(['Attaquer', 'Fuir']);

    let playerChoice = await waitForOption();
    playerChoice = playerChoice.toLowerCase();

    if(playerChoice == 'attaquer') {
      while(lifePV > 0 && monster.pv > 0) {
        let random = Math.floor(Math.random() * 10) % 5;
        switch(random) {
        case 0:
          showMessage('Vous êtes rapide et lui donnez un coup bien placé !');
          monster.pv -= attaque*1.5;
          showOptions(['']);
          await delay(2000);
          break;
        
        case 1:
          showMessage('Vous l\'attaquez par devant.');
          monster.pv -= attaque;
          showOptions(['']);
          await delay(2000);
          break;

        case 2:
          showMessage('Vous lui faites peur sans avoir à bouger le petit doigt.');
          monster.pv = 0;
          showOptions(['']);
          await delay(2000);
          break;

        case 3:
          showMessage('Il est plus rapide que vous et vous prenez une belle droite.');
          lifePV -= monster.att * 1.5;
          updateStats();
          showOptions(['']);
          await delay(2000);

          showMessage('Il s\'en va en vous laissant à votre sort.');
          await delay(3000);
          monster.pv = 0;
          break;

        case 4:
          showMessage('Il vous attaque.');
          lifePV -= monster.att;
          updateStats();
          showOptions(['']);
          await delay(2000);
          break;
        }
      } if (lifePV > 0) {
          showMessage('Vous pouvez désormais continuer votre route.');
          showOptions(['Avancer', 'Rentrer chez soi']);
      }
    } else {
      showMessage('Vous vous retournez et reprenez votre chemin.');
      showOptions(['Avancer', 'Rentrer chez soi']);
    }

    bernNumber = bernouilli(1/2, Math.random());
    eventInProgress2 = false; 
}