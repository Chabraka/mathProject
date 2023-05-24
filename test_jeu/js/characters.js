let eventInProgress = false; // Variable pour suivre si un événement est en cours

function meetCharacters() {
  if (eventInProgress) {
    return; // Si un événement est déjà en cours, ne pas déclencher une nouvelle rencontre
  }

  eventInProgress = true; // Marquer qu'un événement est en cours

  const encounter = Math.random();

  if (encounter < 0.4) {
    meetSoigneur();  // Rencontre avec l'aventurier
  } else if (encounter < 0.7) {
    meetAventurier();  // Rencontre avec l'aventurier
  } else if (encounter < 0.9) {
    meetAventurier(); // Rencontre avec l'aventurier
  } else {
    meetSoigneur(); // Rencontre avec la soigneuse
  }
}

async function meetSoigneur() {
  showMessage('Vous avez rencontré une soigneuse.');
  showOptions(['']);

  await delay(2000);

  showMessage('Aventurier, vous semblez épuisé.');
  showOptions(['']);
  addImage("images/characters/soigneuse.png", "characters");

  await delay(3000);

  const chanceSoignerGratuitement = Math.random() < 0.5;
  console.log(maxLifePV);
  if (chanceSoignerGratuitement) {
    showMessage('Tenez, voici une potion de santé pour vous.');
    lifePV = maxLifePV;
    updateStats();
    showOptions(['Avancer', 'Rentrer chez soi']);
  } else {
    showMessage('Je peux vous soigner, mais cela coûtera 30 dollars.');
    showOptions(['Ne pas se soigner', 'Payer 30 dollars pour les soins']);

    const option = await waitForOption();

    if (option === 'Ne pas se soigner') {
      showMessage('Vous ne voulez pas être soigné. Vous décidez de partir.');
    } else if (option === 'Payer 30 dollars pour les soins') {
      if (money >= 30) {
        showMessage('Vous avez payé 30 dollars et êtes maintenant soigné.');
        money -= 30;
        lifePV = maxLifePV;
        updateStats();
      } else {
        showMessage('Malheureusement, vous n\'avez pas assez d\'argent pour payer les soins.');
      }
    }

    showOptions(['Avancer', 'Rentrer chez soi']);
  }

  eventInProgress = false; // Marquer que l'événement est terminé
}
  
async function meetAventurier() {
  showMessage('Vous rencontrez un aventurier.');
  showOptions(['']);
  await delay(2000);

  addImage("images/characters/aventurier.png", "characters");

  const action = Math.floor(Math.random() * 3) + 1;

  if (action === 1) {
    showMessage('L\'aventurier vous bouscule et vous perdez un demi point de vie.');
    const halfHeart = Math.ceil(maxLifePV / 20);
    lifePV -= halfHeart;
    updateStats();
    showOptions(['']);
    await delay(4000);

    const equipment = getRandomEquipment();
    showMessage('En vous bousculant, l\'aventurier perd de l\'argent et un équipement : ' + equipment.name);
    money += 50;
    updateStats();
    await delay(3000);

    await updateStatsWithEquipment(equipment);
    showOptions(['Avancer', 'Rentrer chez soi']);
  } else if (action === 2) {
    const equipment = getRandomEquipment();
    showMessage('L\'aventurier vous dit qu\'il porte trop de choses et vous donne un équipement aléatoire : ' + equipment.name);
    await updateStatsWithEquipment(equipment);
    showOptions(['Avancer', 'Rentrer chez soi']);
  } else if (action === 3) {
    showMessage('L\'aventurier vous propose un équipement aléatoire.');
    showOptions(['Accepter', 'Refuser']);

    const option = await waitForOption();

    if (option === 'Accepter') {
      const stealChance = Math.random() < 0.1;

      if (stealChance) {
        showMessage('L\'aventurier vous vole 50$ et s\'en va.');
        money -= 50;
        if (money < 0) {
          money = 0;
        }
        updateStats();
      } else {
        const equipment = getRandomEquipment();
        showMessage('Vous avez obtenu un nouvel équipement : ' + equipment.name);
        await delay(2000);
        await updateStatsWithEquipment(equipment);
      }
    } else if (option === 'Refuser') {
      showMessage('Vous refusez l\'offre de l\'aventurier.');
    }

    showOptions(['Avancer', 'Rentrer chez soi']);
  }

  eventInProgress = false; // Marquer que l'événement est terminé
}
  


  