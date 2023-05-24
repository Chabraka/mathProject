let eventInProgress = false; // Variable pour suivre si un événement est en cours

function meetMonsters() {
  if (eventInProgress) {
    return; // Si un événement est déjà en cours, ne pas déclencher une nouvelle rencontre
  }

  eventInProgress = true; // Marquer qu'un événement est en cours

  let monster = '';
  //const geoNumber = geometrique(0.7, Math.random());
  const geoNumber = Math.floor(Math.random()*10)

  switch(geoNumber) {
    case 1 :
      monster = 'Slime'; 
    case 2 :
      monster = 'Gobelin'; 
    case 3 :
      monster = 'Orc'; 
    case 4 :
      monster = 'Troll';
    case 5 :
      monster = 'Griffon'; 
    default : 
      monster = 'Dragon';
    } 
  
    // Afficher le dialogue ou déclencher l'action correspondante au monstre rencontré
    showMessage('Vous rencontrez un ' + monster + '.');
    // Mettez ici le code spécifique pour interagir avec le monstre rencontré
}