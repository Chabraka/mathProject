let eventInProgress = false; // Variable pour suivre si un événement est en cours

function meetCharacters() {
  if (eventInProgress) {
    return; // Si un événement est déjà en cours, ne pas déclencher une nouvelle rencontre
  }
  eventInProgress = true; // Marquer qu'un événement est en cours

  //Loi de poisson
  let poissonNumber = poisson(paramMeetCharacters, Math.random())

  if (poissonNumber == 6 ) {
      meetMarchand();  // Rencontre avec le marchand
  } else if (poissonNumber == 5 ) {
      meetJoueur();  // Rencontre avec la joueuse
  } else if (poissonNumber == 7) {
      meetSoigneur(); // Rencontre avec la soigneuse
  } else {
      meetAventurier(); // Rencontre avec l'aventurier
  }
  rademacherNumber = rademacher(paramRadeForCharacters, Math.random()); // Markov
}

async function meetSoigneur() {
  showMessage('Vous avez rencontré une soigneuse.');
  showOptions(['']);
  await delay(2000);

  showMessage('Aventurier, vous semblez épuisé.');
  showOptions(['']);
  addImage("images/characters/soigneuse.png", "characters");
  await delay(3000);

  // const chanceSoignerGratuitement = Math.random() < 0.5;
  const chanceSoignerGratuitement = rademacher(2/5, Math.random());
  console.log('avant :'+ maxLifePV);
  if (chanceSoignerGratuitement == 1) {
    showMessage('Tenez, voici une potion de santé pour vous.');
    lifePV = maxLifePV;
    console.log('ap1 :'+ maxLifePV);
    updateStats();
    showOptions(['Avancer', 'Rentrer chez soi']);
  } else {
    showMessage('Je peux vous soigner, mais cela coûtera 30 dollars.');
    showOptions(['Ne pas se soigner', 'Payer 30 dollars pour les soins']);

    const option = await waitForOption();

    if (option === 'Ne pas se soigner') {
      showMessage('Vous ne voulez pas être soigné. Vous décidez de partir.');
    } 
    else if (option === 'Payer 30 dollars pour les soins') {
      if (money >= 30) {
        showMessage('Vous avez payé 30 dollars et êtes maintenant soigné.');
        money -= 30;
        lifePV = maxLifePV;
        console.log('ap2 :'+ maxLifePV);
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
  let category = ['artefact', 'bouclier', 'épée']; // Ensemble de valeurs possibles pour la variable aléatoire non numérique
  let random = Math.floor(Math.random() * 10) % 3; // Paramètre pour la variable aléatoire non numérique

  if (action === 1) {
    showMessage('L\'aventurier vous bouscule et vous perdez un demi point de vie.');
    const halfHeart = Math.ceil(maxLifePV / 20);
    lifePV -= halfHeart;
    updateStats();
    showOptions(['']);
    await delay(4000);

    const equipment = getRandomEquipment(category[random]); // Variable aléatoire non numérique
    showMessage('En vous bousculant, l\'aventurier perd de l\'argent et un équipement : ' + equipment.name);
    money += 50;
    updateStats();
    await delay(3000);

    await updateStatsWithEquipment(equipment);
    showOptions(['Avancer', 'Rentrer chez soi']);
  } 
  else if (action === 2) {
    const equipment = getRandomEquipment(category[random]); // Variable aléatoire non numérique
    showMessage('L\'aventurier vous dit qu\'il porte trop de choses et vous donne un équipement aléatoire : ' + equipment.name);
    showOptions(['']);
    await updateStatsWithEquipment(equipment);
    showOptions(['Avancer', 'Rentrer chez soi']);
  } 
  else if (action === 3) {
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
        const equipment = getRandomEquipment(category[random]); // Variable aléatoire non numérique
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
  

async function meetMarchand() {
  showMessage('Vous avez rencontré un marchand.');
  showOptions(['']);

  await delay(2000);

  showMessage('Bienvenue dans ma boutique ! Voici les équipements que j\'ai en vente :');
  addImage("images/characters/marchand.png", "characters");

  const equipment1 = getRandomEquipment('artefact');
  const equipment2 = getRandomEquipment('bouclier');
  const equipment3 = getRandomEquipment('épée');

  let option;
  let option1 = equipment1.name + " : " + equipment1.value + " $";
  let option2 = equipment2.name + " : " + equipment2.value + " $";
  let option3 = equipment3.name + " : " + equipment3.value + " $";

  do {
    showOptions([option1, option2, option3, 'Ne rien acheter']);

    option = await waitForOption();

    if (option === option1) {
      if (option1 !== "X équipement acheté") {
        if (money >= equipment1.value) {
          showMessage(`Vous avez acheté ${equipment1.name} pour ${equipment1.value} $.`);
          money -= equipment1.value;
          await updateStatsWithEquipment(equipment1);
          option1 = "X équipement acheté";
        } else {
          showMessage('Vous n\'avez pas assez d\'argent pour acheter cet équipement.');
        }
      } else {
        showMessage('Vous avez déjà acheté cet équipement.');
      }
    } else if (option === option2) {
      if (option2 !== "X équipement acheté") {
        if (money >= equipment2.value) {
          showMessage(`Vous avez acheté ${equipment2.name} pour ${equipment2.value} $.`);
          money -= equipment2.value;
          await updateStatsWithEquipment(equipment2);
          option2 = "X équipement acheté";
        } else {
          showMessage('Vous n\'avez pas assez d\'argent pour acheter cet équipement.');
        }
      } else {
        showMessage('Vous avez déjà acheté cet équipement.');
      }
    } else if (option === option3) {
      if (option3 !== "X équipement acheté") {
        if (money >= equipment3.value) {
          showMessage(`Vous avez acheté ${equipment3.name} pour ${equipment3.value} $.`);
          money -= equipment3.value;
          await updateStatsWithEquipment(equipment3);
          option3 = "X équipement acheté";
        } else {
          showMessage('Vous n\'avez pas assez d\'argent pour acheter cet équipement.');
        }
      } else {
        showMessage('Vous avez déjà acheté cet équipement.');
      }
    } else {
      showMessage('Vous avez fini ? J\'espère vous recroiser bientôt !' );
      showOptions(['Avancer', 'Rentrer chez soi']);
      eventInProgress = false;
    }
  } while (eventInProgress);
}
  

async function meetJoueur() {
  showMessage('Vous avez rencontré une joueuse.');
  showOptions(['']);

  await delay(2000);

  showMessage('Salut ! Tu veux faire un pierre-feuille-ciseaux ? On parie ?');
  addImage("images/characters/joueuse.png", "characters");

  showOptions(['Jouer (coût: 50$)', 'Ne pas jouer']);

  const option = await waitForOption();

  if (option === 'Jouer (coût: 50$)') {
    if (money >= 50) {
      money -= 50;
      updateStats();

      showMessage('Tu veux jouer en combien de manches ?');
      showOptions([1, 2, 3, 4, 5, 6]);

      const nbRepetitions = await waitForOption();

      const probaVictoire = 1 / 3; 
      const nbVictoires = binomiale(nbRepetitions, probaVictoire, Math.random());

      let gain = 0;
      console.log(nbVictoires)
      await simulatePierreFeuilleCiseaux(nbVictoires, nbRepetitions);

      if (nbVictoires === nbRepetitions) {
        gain = 50 * nbVictoires ;
        showMessage('La chance t\as gagné toutes les manches ! Voici tes '+ gain + ' $.');
      } else if (nbVictoires < nbRepetitions && nbVictoires > 1 ) {
        gain = 20 * nbVictoires;
        showMessage('Pas mal ! Tu mérites bien ' + gain + '$.');
      } else if (nbVictoires === 1 && nbVictoires != nbRepetitions) {
        showMessage('Une victoire. Tiens 10$, tu pourras t\'acheter du chocolat.');
        gain = 10;
      } else {
        showMessage('Héhé 0 victoire pour toi.');
      }
      money += gain;
      updateStats();

    } else {
      showMessage('Vous n\'avez pas assez d\'argent pour jouer.');
    }
  } else {
    showMessage('Vous décidez de ne pas jouer.');
  }
  showOptions(['Avancer', 'Rentrer chez soi']);
  eventInProgress = false; 
}


function calculateMeetJoueurStats() {
  const numSimulations = 10000;

  let totalWins = 0;
  let totalLosses = 0;
  let totalSuccessCount = 0;

  for (let i = 0; i < numSimulations; i++) {
    const nbVictoires = binomiale(3, 1 / 3, Math.random());

    totalWins += nbVictoires === 3 ? 1 : 0;
    totalLosses += nbVictoires === 0 ? 1 : 0;
    totalLosses += nbVictoires === 1 ? 1 : 0;
    totalSuccessCount += nbVictoires;
  }

  const averageWinProbability = totalWins / numSimulations; // Probabilité moyenne de gagner
  const averageLossProbability = totalLosses / numSimulations; // Probabilité moyenne de perdre de l'argent
  const averageSuccessCount = totalSuccessCount / numSimulations; // Nombre moyen de succès
  const variance = varianceBin(3, averageSuccessCount / 3); // Variance
  const standardDeviation = ecartTypeBin(3, averageSuccessCount / 3); // Écart type

  //Pour un jeu
  const WinProbability = probaBin(3, 3, 1 / 3); // Probabilité moyenne de gagner
  const LossProbability = probaBin(3, 0, 2 / 3) + probaBin(3, 1, 2 / 3);  // Probabilité moyenne de perdre de l'argent
  const SuccessCount = esperanceBin(3, 1 / 3); // Nombre moyen de succès

  //displayStatsOnPage(averageWinProbability, averageLossProbability, averageSuccessCount, variance, standardDeviation);
}