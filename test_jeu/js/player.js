function updateStats() {
  const maxHearts = 10; // Nombre maximum de cœurs affichés
  const heartsPerHeartContainer = Math.ceil(maxLifePV / maxHearts); // Calcul du nombre de points de vie par cœur affiché

  const heartContainers = Math.floor(lifePV / heartsPerHeartContainer); // Calcul du nombre de conteneurs de cœurs pleins
  const remainingHearts = lifePV % heartsPerHeartContainer; // Calcul du nombre de cœurs restants à afficher dans le dernier conteneur

  let heartsHTML = '';

  if (lifePV <= 0) {
      // Afficher uniquement des cœurs vides si lifePV est inférieur ou égal à 0
      for (let i = 0; i < maxHearts; i++) {
          heartsHTML += '<i class="far fa-heart fa-xl"></i>';
      }
  } else {
      // Génération des conteneurs de cœurs pleins
      for (let i = 0; i < heartContainers; i++) {
          heartsHTML += '<i class="fas fa-heart fa-xl"></i>';
      }
    
      // Génération du conteneur de cœurs partiellement rempli (s'il y a des cœurs restants)
      if (remainingHearts > 0) {
          heartsHTML += '<i class="fas fa-heart"></i>';
      }
    
      // Génération des conteneurs de cœurs vides
      const emptyHeartContainers = maxHearts - heartContainers - (remainingHearts > 0 ? 1 : 0);
      for (let i = 0; i < emptyHeartContainers; i++) {
          heartsHTML += '<i class="far fa-heart fa-xl"></i>';
      }
  }
  document.querySelector('.lifePV').innerHTML = heartsHTML;
  document.querySelector('.money').textContent = money;
}

function updateParams() {
    document.querySelector('.stronger-monsters').textContent = "Monstres plus forts : " + paramMeetMonsters;
    document.querySelector('.change-chars').textContent = "Apparition des personnages : " + paramMeetCharacters;
    document.querySelector('.meet-chars').textContent = "Plus de personnages  : " + paramRadeForCharacters;
    document.querySelector('.meet-monsters').textContent = "Moins de monstres : " + paramRadeForMonsters;
}


function getStats() {
    /* --- PERSOS --- */
    // Rencontre persos
    console.log("Pourcentage persos rencontrés : " + meetHuman / meetSomeone * 100 + "%")
    console.log("Valeur théorique : " + (meetHuman * paramRadeForCharacters + meetMonster * paramRadeForMonsters)/meetSomeone * 100 + "%")
        // Marchand
    console.log("Pourcentage rencontre Marchand : " + meetMarch / meetHuman * 100 + "%")
    console.log("Valeur théorique : " + probaPoisson(paramMeetCharacters, 6) * 100 + "%")
        // Joueur
    console.log("Pourcentage rencontre Joueur : " + meetJou / meetHuman * 100 + "%")
    console.log("Valeur théorique : " + probaPoisson(paramMeetCharacters, 5) * 100 + "%")
        // Soigneur
    console.log("Pourcentage rencontre Soigneur : " + meetSoign / meetHuman * 100 + "%")
    console.log("Valeur théorique : " + probaPoisson(paramMeetCharacters, 7) * 100 + "%")
        // Aventurier
    console.log("Pourcentage rencontre Aventurier : " + meetAvent / meetHuman * 100 + "%")
    console.log("Valeur théorique : " + (1 - (probaPoisson(paramMeetCharacters, 7) + probaPoisson(paramMeetCharacters, 6) + probaPoisson(paramMeetCharacters, 5))) * 100 + "%")
        // Loi Poisson
    console.log("Espérance loi Poisson de paramètre " + paramMeetCharacters + " : " + esperancePoisson(paramMeetCharacters))
    console.log("Variance loi Poisson de paramètre " + paramMeetCharacters + " : " + variancePoisson(paramMeetCharacters))
    console.log("Ecart-type loi Poisson de paramètre " + paramMeetCharacters + " : " + ecartTypePoisson(paramMeetCharacters))

        // Soins
    console.log("Pourcentage soins gratuits : " + soigneGratuitement / meetSoign * 100 + "%")
    console.log("Valeur théorique : " + 2/7 * 100 + "%")
        // Loi Rademecher
    console.log("Espérance loi Rademecher de paramètre 2/7 : " + esperanceRade(2/7))
    console.log("Variance loi Rademecher de paramètre 2/7 : " + varianceRade(2/7))
    console.log("Ecart-type loi Rademecher de paramètre 2/7 : " + ecartTypeRade(2/7))
            

    /* --- MONSTRES --- */
    // Rencontre monstres
    console.log("Pourcentage monstres rencontrés : " + meetMonster / meetSomeone * 100 + "%")
    console.log("Valeur théorique : " + (meetHuman * (1 - paramRadeForCharacters) + meetMonster * (1 - paramRadeForMonsters))/meetSomeone * 100 + "%")
        // Slime
    console.log("Pourcentage rencontre Slime : " + meetSlime / meetMonster * 100 + "%")
    console.log("Valeur théorique : " + probaGeo(paramMeetMonsters, 1) * 100 + "%")
        // Gobelin
    console.log("Pourcentage rencontre Gobelin : " + meetGobelin / meetMonster * 100 + "%")
    console.log("Valeur théorique : " + probaGeo(paramMeetMonsters, 2) * 100 + "%")
        // Orc
    console.log("Pourcentage rencontre Orc : " + meetOrc / meetMonster * 100 + "%")
    console.log("Valeur théorique : " + probaGeo(paramMeetMonsters, 3) * 100 + "%")
        // Troll
    console.log("Pourcentage rencontre Troll : " + meetTroll / meetMonster * 100 + "%")
    console.log("Valeur théorique : " + probaGeo(paramMeetMonsters, 4) * 100 + "%")
        // Griffon
    console.log("Pourcentage rencontre Griffon : " + meetGriffon / meetMonster * 100 + "%")
    console.log("Valeur théorique : " + probaGeo(paramMeetMonsters, 5) * 100 + "%")
        // Dragon
    console.log("Pourcentage rencontre Dragon : " + meetDragon / meetMonster * 100 + "%")
    console.log("Valeur théorique : " + (1 - (probaGeo(paramMeetMonsters, 1) + probaGeo(paramMeetMonsters, 2) + probaGeo(paramMeetMonsters, 3) + probaGeo(paramMeetMonsters, 4) + probaGeo(paramMeetMonsters, 5)) )* 100 + "%")
        // Loi Geo
    console.log("Espérance loi géométrique de paramètre " + paramMeetMonsters + " : " + esperanceGeo(paramMeetMonsters))
    console.log("Variance loi géométrique de paramètre " + paramMeetMonsters + " : " + varianceGeo(paramMeetMonsters))
    console.log("Ecart-type loi géométrique de paramètre " + paramMeetMonsters + " : " + ecartTypeGeo(paramMeetMonsters))

        // Fuite
    console.log("Pourcentage fuite : " + choixFuite / meetMonster * 100 + "%")
    console.log("Pourcentage fuite sans dégâts : " + fuiteSafe / choixFuite * 100 + "%")
    console.log("Valeur théorique : " + 2/3 * 100 + "%")
        // Loi Bernouilli
    console.log("Espérance loi Bernouilli de paramètre 2/3 : " + esperanceBern(2/3))
    console.log("Variance loi Bernouilli de paramètre 2/3 : " + varianceBern(2/3))
    console.log("Ecart-type loi Bernouilli de paramètre 2/3 : " + ecartTypeBern(2/3))

        // Attaque
    console.log("Pourcentage attaque : " + choixAttaque / meetMonster * 100 + "%")
    console.log("Pourcentage de dégâts infligés : " + infligeDegats / (infligeDegats + prendDegats + pasDegats) * 100 + "%")
    console.log("Valeur théorique : " + 2/5 * 100 + "%")
    console.log("Pourcentage de dégâts reçus : " + prendDegats / (infligeDegats + prendDegats + pasDegats) * 100 + "%")
    console.log("Valeur théorique : " + 2/5 * 100 + "%")
    console.log("Pourcentage d'action sans dégâts : " + pasDegats / (infligeDegats + prendDegats + pasDegats) * 100 + "%")
    console.log("Valeur théorique : " + 1/5 * 100 + "%")
        // Loi Uniforme
    console.log("Espérance loi uniforme de paramètre 5 : " + esperanceUniforme(5))
    console.log("Variance loi uniforme de paramètre 5 : " + varianceUniforme(5))
    console.log("Ecart-type loi uniforme de paramètre 5 : " + ecartTypeUniforme(5))

    /* --- Pierre-Feuille-Ciseaux --- */
    console.log("Pourcentage de parties gagnées : " + nbGamesWon / nbGames * 100 + "%")
    console.log("Valeur théorique : " + (choixSets[0][1] * esperanceBin(1, 1/3) + choixSets[0][2] * esperanceBin(2, 1/3)  + choixSets[0][3] * esperanceBin(3, 1/3) + choixSets[0][4] * esperanceBin(4, 1/3) + choixSets[0][5] * esperanceBin(5, 1/3) + choixSets[0][6] * esperanceBin(6, 1/3)) / nbGames * 100 + "%")
    console.log("Variance (binomiale pondérée selon le nombre de manches souhaité) : " + (choixSets[0][1] * varianceBin(1, 1/3) + choixSets[0][2] * varianceBin(2, 1/3)  + choixSets[0][3] * varianceBin(3, 1/3) + choixSets[0][4] * varianceBin(4, 1/3) + choixSets[0][5] * varianceBin(5, 1/3) + choixSets[0][6] * varianceBin(6, 1/3)) / nbGames)
    console.log("Ecart-type (binomiale pondérée selon le nombre de manches souhaité) : " + Math.sqrt((choixSets[0][1] * varianceBin(1, 1/3) + choixSets[0][2] * varianceBin(2, 1/3)  + choixSets[0][3] * varianceBin(3, 1/3) + choixSets[0][4] * varianceBin(4, 1/3) + choixSets[0][5] * varianceBin(5, 1/3) + choixSets[0][6] * varianceBin(6, 1/3)) / nbGames))

    console.log("Pourcentage de manches gagnées : " + nbSetsWon / nbSets * 100 + "%")
    console.log("Valeur théorique : " + 1/3 * 100 + "%")
    console.log("Pourcentage de manches nulles : " + nbSetsNull / nbSets * 100 + "%")
    console.log("Valeur théorique : " + 1/3 * 100 + "%")
    console.log("Pourcentage de manches perdues : " + (nbSets - nbSetsNull - nbSetsWon) / nbSets * 100 + "%")
    console.log("Valeur théorique : " + 1/3 * 100 + "%")
}


