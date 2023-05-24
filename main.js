// Joueur

let joueur = new Joueur("Juline", 200, 30, "Pelle à tarte")
let monstre = new Monstre("Gobelin", 75, 10, "Dague")

joueur.afficherStatsJoueur()
monstre.afficherStatsMonstre()

rencontreMonstre(0.2);


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
      await delay(2000);
  
      const equipment = getRandomEquipment();
      showMessage('En vous bousculant l\'aventurier perd de l\'argent et un équipement : ' + equipment.name);
      money += 50;
      updateStats();
      await delay(2000);
  
      await updateStatsWithEquipment(equipment);
      showOptions(['Avancer', 'Rentrer chez soi']);
    } 
    
    
    else if (action === 2) {
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
  }