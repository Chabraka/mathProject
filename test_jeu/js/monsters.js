function meetMonsters() {
    const encounter = Math.random(); // Génère un nombre aléatoire entre 0 et 1
    let monster = '';
  
    // Déterminer le monstre rencontré en fonction de la loi géométrique
    if (encounter < 0.2) {
      monster = 'Slime'; // 20% de chance de rencontrer un slime
    } else if (encounter < 0.4) {
      monster = 'Gobelin'; // 20% de chance de rencontrer un gobelin
    } else if (encounter < 0.6) {
      monster = 'Orc'; // 20% de chance de rencontrer un orc
    } else if (encounter < 0.75) {
      monster = 'Troll'; // 15% de chance de rencontrer un troll
    } else if (encounter < 0.9) {
      monster = 'Griffon'; // 15% de chance de rencontrer un griffon
    } else {
      monster = 'Dragon'; // 10% de chance de rencontrer un dragon
    }
  
    // Afficher le dialogue ou déclencher l'action correspondante au monstre rencontré
    showMessage('Vous rencontrez un ' + monster + '.');
    // Mettez ici le code spécifique pour interagir avec le monstre rencontré
}