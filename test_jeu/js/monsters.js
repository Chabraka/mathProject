let eventInProgress2 = false; // Variable pour suivre si un événement est en cours

async function meetMonsters() {
  if (eventInProgress2) {
    return; // Si un événement est déjà en cours, ne pas déclencher une nouvelle rencontre
  }

  eventInProgress2 = true; // Marquer qu'un événement est en cours
  meetSomeone += 1;
  meetMonster += 1;

  const monsters = [
    { name: 'Chauve-souris', pv: 10, att: 5},
    { name: 'Slime', pv: 20, att: 10},
    { name: 'Shaman',  pv: 30, att: 20},
    { name: 'Golem', pv: 40, att: 30},
    { name: 'Ombre', pv: 50, att: 50},
    { name: 'Dragon', pv: 90, att: 100}
  ];
  
  const geoNumber = geometrique(paramMeetMonsters, Math.random());
  let monster;
  let monsterNb = Math.min(geoNumber - 1, 6);
  console.log(monsterNb)
  switch(monsterNb) {
    case 1 :
      monster = monsters[monsterNb - 1];
      meetChauveSouris += 1;
      getStats();
      break;
    case 2 :
      monster = monsters[monsterNb - 1];
      meetSlime += 1;
      getStats();
      break;
    case 3 :
      monster = monsters[monsterNb - 1];
      meetShaman += 1;
      getStats();
      break;
    case 4 :
      monster = monsters[monsterNb - 1];
      meetGolem += 1;
      getStats();
      break;
    case 5 :
      monster = monsters[monsterNb - 1];
      meetOmbre += 1;
      getStats();
      break;
    case 6 :
      monster = monsters[monsterNb - 1];
      meetDragon += 1;
      getStats();
      break;
  }

  addImage("images/monsters/" + monster.name.toLowerCase() + ".png", monster.name);
  showMessage('Vous rencontrez un ' + monster.name + '.');
  await delay(2000);

  showMessage('Que voulez-vous faire ?');
  showOptions(['Attaquer', 'Fuir']);

  let playerChoice = await waitForOption();
  playerChoice = playerChoice.toLowerCase();

  if(playerChoice == 'attaquer') {
    choixAttaque += 1;
    while(lifePV > 0 && monster.pv > 0) {
      let random = Math.floor(Math.random() * 10) % 5;
      switch(random) {
      case 0:
        infligeDegats += 1;
        getStats();
        showMessage('Vous êtes rapide et lui donnez un coup bien placé !');
        monster.pv -= attaque*1.5;
        showOptions(['']);
        await delay(2000);
        break;
      
      case 1:
        infligeDegats += 1;
        getStats();
        showMessage('Vous l\'attaquez par devant.');
        monster.pv -= attaque;
        showOptions(['']);
        await delay(2000);
        break;

      case 2:
        pasDegats += 1;
        getStats();
        showMessage('Vous lui faites peur sans avoir à bouger le petit doigt.');
        monster.pv = 0;
        showOptions(['']);
        await delay(2000);
        break;

      case 3:
        prendDegats +=1;
        getStats();
        showMessage('Il est plus rapide que vous et vous prenez une belle droite.');
        lifePV -= monster.att * 1.5 - defense/2;
        updateStats();
        showOptions(['']);
        await delay(2000);

        showMessage('Il s\'en va en vous laissant à votre sort.');
        await delay(3000);
        monster.pv = 0;
        break;

      case 4:
        prendDegats += 1;
        getStats();
        showMessage('Il vous attaque.');
        lifePV -= monster.att - defense/2;
        updateStats();
        showOptions(['']);
        await delay(2000);
        break;
      }
    } 
    if (lifePV > 0 && monster.name != 'Dragon') {
        clearImage()
        showMessage('Vous pouvez désormais continuer votre route.');
        showOptions(['Avancer', 'Rentrer chez soi']);
    }
    else if (lifePV > 0 && monster.name == 'Dragon') {
      GameWin();
    }
    else{
      GameOver();
    }
  } 
  else {
    choixFuite += 1;
    getStats();
    let fuir = bernouilli(2/3, Math.random());

    if(fuir == 0) {
      showMessage('Vous vous faites attaquer avant même d\'avoir pu bouger.');
      lifePV -= monster.att;
      updateStats();
      showOptions(['']);
      await delay(2000);

      clearImage()
      showMessage('Vous vous enfuyez enfin.');
      await delay(2000);
    } else { 
      fuiteSafe += 1;
      getStats();
    }
    if (lifePV > 0) {
      clearImage()
      showMessage('Vous vous retournez et reprenez votre chemin.');
      showOptions(['Avancer', 'Rentrer chez soi']);
    }
    else{
      GameOver();
    }
  }

  rademacherNumber = rademacher(paramRadeForMonsters, Math.random());
  eventInProgress2 = false; 
}