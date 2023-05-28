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
    const statsContent = document.querySelector('.stats-content');
    statsContent.innerHTML = '';

    const title = document.createElement('h2');
    title.textContent = 'Statistiques du joueur';

    /* --- PERSOS --- */
    // Rencontre persos
    let p1 = document.createElement('p');
    p1.textContent = "Pourcentage persos rencontrés : " + meetHuman / meetSomeone * 100 + "%";
        statsContent.appendChild(p1);
    let p2 = document.createElement('p');
    p2.textContent = "Valeur théorique : " + (meetHuman * paramRadeForCharacters + meetMonster * paramRadeForMonsters)/meetSomeone * 100 + "%";
        statsContent.appendChild(p2);
        // Marchand
    let p3 = document.createElement('p');
    p3.textContent = "Pourcentage rencontre Marchand : " + meetMarch / meetHuman * 100 + "%";
        statsContent.appendChild(p3);
    let p4 = document.createElement('p');
    p4.textContent = "Valeur théorique : " + probaPoisson(paramMeetCharacters, 6) * 100 + "%";
    statsContent.appendChild(p4);
        // Joueur
    let p5 = document.createElement('p');
    p5.textContent = "Pourcentage rencontre Joueur : " + meetJou / meetHuman * 100 + "%";
        statsContent.appendChild(p5);
    let p6 = document.createElement('p');    
    p6.textContent = "Valeur théorique : " + probaPoisson(paramMeetCharacters, 5) * 100 + "%";
        statsContent.appendChild(p6);
        // Soigneur
    let p7 = document.createElement('p');
    p7.textContent = "Pourcentage rencontre Soigneur : " + meetSoign / meetHuman * 100 + "%";
        statsContent.appendChild(p7);
    let p8 = document.createElement('p');
    p8.textContent = "Valeur théorique : " + probaPoisson(paramMeetCharacters, 7) * 100 + "%";
        statsContent.appendChild(p8);
        // Aventurier
    let p9 = document.createElement('p');
    p9.textContent = "Pourcentage rencontre Aventurier : " + meetAvent / meetHuman * 100 + "%";
        statsContent.appendChild(p9);
    let p10 = document.createElement('p');
    p10.textContent = "Valeur théorique : " + (1 - (probaPoisson(paramMeetCharacters, 7) + probaPoisson(paramMeetCharacters, 6) + probaPoisson(paramMeetCharacters, 5))) * 100 + "%";
        statsContent.appendChild(p10);
        // Loi Poisson
    let p11 = document.createElement('p');
    p11.textContent = "Espérance loi Poisson de paramètre " + paramMeetCharacters + " : " + esperancePoisson(paramMeetCharacters);
        statsContent.appendChild(p11);
    let p12 = document.createElement('p');
    p12.textContent = "Variance loi Poisson de paramètre " + paramMeetCharacters + " : " + variancePoisson(paramMeetCharacters);
        statsContent.appendChild(p12);
    let p13 = document.createElement('p');
    p13.textContent = "Ecart-type loi Poisson de paramètre " + paramMeetCharacters + " : " + ecartTypePoisson(paramMeetCharacters);
        statsContent.appendChild(p13);

        // Soins
    let p14 = document.createElement('p');
    p14.textContent = "Pourcentage soins gratuits : " + soigneGratuitement / meetSoign * 100 + "%";
        statsContent.appendChild(p14);
    let p15 = document.createElement('p');
    p15.textContent = "Valeur théorique : " + 2/7 * 100 + "%";
        statsContent.appendChild(p15);
        // Loi Rademecher
    let p16 = document.createElement('p');
    p16.textContent = "Espérance loi Rademecher de paramètre 2/7 : " + esperanceRade(2/7);
        statsContent.appendChild(p16);
    let p17 = document.createElement('p');
    p17.textContent = "Variance loi Rademecher de paramètre 2/7 : " + varianceRade(2/7);
        statsContent.appendChild(p17);
    let p18 = document.createElement('p');
    p18.textContent = "Ecart-type loi Rademecher de paramètre 2/7 : " + ecartTypeRade(2/7);    
        statsContent.appendChild(p18);

    /* --- MONSTRES --- */
    // Rencontre monstres
    let p19 = document.createElement('p');
    p19.textContent = "Pourcentage monstres rencontrés : " + meetMonster / meetSomeone * 100 + "%";
        statsContent.appendChild(p19);
    let p20 = document.createElement('p');
    p20.textContent = "Valeur théorique : " + (meetHuman * (1 - paramRadeForCharacters) + meetMonster * (1 - paramRadeForMonsters))/meetSomeone * 100 + "%";
        statsContent.appendChild(p20);

        // Slime
    let p21 = document.createElement('p');
    p21.textContent = "Pourcentage rencontre Slime : " + meetSlime / meetMonster * 100 + "%";
        statsContent.appendChild(p21);
    let p22 = document.createElement('p');
    p22.textContent = "Valeur théorique : " + probaGeo(paramMeetMonsters, 1) * 100 + "%";
        statsContent.appendChild(p22);
        // Gobelin
    let p23 = document.createElement('p');
    p23.textContent = "Pourcentage rencontre Gobelin : " + meetGobelin / meetMonster * 100 + "%";
        statsContent.appendChild(p23);
    let p24 = document.createElement('p');
    p24.textContent = "Valeur théorique : " + probaGeo(paramMeetMonsters, 2) * 100 + "%";
        statsContent.appendChild(p24);
        // Orc
    let p25 = document.createElement('p');
    p25.textContent = "Pourcentage rencontre Orc : " + meetOrc / meetMonster * 100 + "%";
        statsContent.appendChild(p25);
    let p26 = document.createElement('p');
    p26.textContent = "Valeur théorique : " + probaGeo(paramMeetMonsters, 3) * 100 + "%";
        statsContent.appendChild(p26);
        // Troll
    let p27 = document.createElement('p');
    p27.textContent = "Pourcentage rencontre Troll : " + meetTroll / meetMonster * 100 + "%";
        statsContent.appendChild(p27);    
    let p28 = document.createElement('p');
    p28.textContent = "Valeur théorique : " + probaGeo(paramMeetMonsters, 4) * 100 + "%";
        statsContent.appendChild(p28);
        // Griffon
    let p29 = document.createElement('p');
    p29.textContent = "Pourcentage rencontre Griffon : " + meetGriffon / meetMonster * 100 + "%";
        statsContent.appendChild(p29);
    let p30 = document.createElement('p');
    p30.textContent = "Valeur théorique : " + probaGeo(paramMeetMonsters, 5) * 100 + "%";
        statsContent.appendChild(p30);
        // Dragon
    let p31 = document.createElement('p');
    p31.textContent = "Pourcentage rencontre Dragon : " + meetDragon / meetMonster * 100 + "%";
        statsContent.appendChild(p31);
    let p32 = document.createElement('p');
    p32.textContent = "Valeur théorique : " + (1 - (probaGeo(paramMeetMonsters, 1) + probaGeo(paramMeetMonsters, 2) + probaGeo(paramMeetMonsters, 3) + probaGeo(paramMeetMonsters, 4) + probaGeo(paramMeetMonsters, 5)) )* 100 + "%";
        statsContent.appendChild(p32);
        // Loi Geo
    let p33 = document.createElement('p');
    p33.textContent = "Espérance loi géométrique de paramètre " + paramMeetMonsters + " : " + esperanceGeo(paramMeetMonsters);
        statsContent.appendChild(p33);
    let p34 = document.createElement('p');
    p34.textContent = "Variance loi géométrique de paramètre " + paramMeetMonsters + " : " + varianceGeo(paramMeetMonsters);
        statsContent.appendChild(p34);
    let p35 = document.createElement('p');
    p35.textContent = "Ecart-type loi géométrique de paramètre " + paramMeetMonsters + " : " + ecartTypeGeo(paramMeetMonsters);
        statsContent.appendChild(p35);

        // Fuite
    let p36 = document.createElement('p');
    p36.textContent = "Pourcentage fuite : " + choixFuite / meetMonster * 100 + "%";
        statsContent.appendChild(p36);
    let p37 = document.createElement('p');
    p37.textContent = "Pourcentage fuite sans dégâts : " + fuiteSafe / choixFuite * 100 + "%";
        statsContent.appendChild(p37);
    let p38 = document.createElement('p');
    p38.textContent = "Valeur théorique : " + 2/3 * 100 + "%";
        statsContent.appendChild(p38);
        // Loi Bernouilli
    let p39 = document.createElement('p');
    p39.textContent = "Espérance loi Bernouilli de paramètre 2/3 : " + esperanceBern(2/3);
        statsContent.appendChild(p39);
    let p40 = document.createElement('p');
    p40.textContent = "Variance loi Bernouilli de paramètre 2/3 : " + varianceBern(2/3);
        statsContent.appendChild(p40);
    let p41 = document.createElement('p');
    p41.textContent = "Ecart-type loi Bernouilli de paramètre 2/3 : " + ecartTypeBern(2/3);
        statsContent.appendChild(p41);

        // Attaque
    let p42 = document.createElement('p');
    p42.textContent = "Pourcentage attaque : " + choixAttaque / meetMonster * 100 + "%";
        statsContent.appendChild(p42);
    let p43 = document.createElement('p');
    p43.textContent = "Pourcentage de dégâts infligés : " + infligeDegats / (infligeDegats + prendDegats + pasDegats) * 100 + "%";
        statsContent.appendChild(p43);
    let p44 = document.createElement('p');
    p44.textContent = "Valeur théorique : " + 2/5 * 100 + "%";
        statsContent.appendChild(p44);
    let p45 = document.createElement('p');
    p45.textContent = "Pourcentage de dégâts reçus : " + prendDegats / (infligeDegats + prendDegats + pasDegats) * 100 + "%";
        statsContent.appendChild(p45);
    let p46 = document.createElement('p');
    p46.textContent = "Valeur théorique : " + 2/5 * 100 + "%";
        statsContent.appendChild(p46);
    let p47 = document.createElement('p');
    p47.textContent = "Pourcentage d'action sans dégâts : " + pasDegats / (infligeDegats + prendDegats + pasDegats) * 100 + "%";
        statsContent.appendChild(p47);
    let p48 = document.createElement('p');
    p48.textContent = "Valeur théorique : " + 1/5 * 100 + "%";
        statsContent.appendChild(p48);
        // Loi Uniforme
    let p49 = document.createElement('p');
    p49.textContent = "Espérance loi uniforme de paramètre 5 : " + esperanceUniforme(5);
        statsContent.appendChild(p49);
    let p50 = document.createElement('p');
    p50.textContent = "Variance loi uniforme de paramètre 5 : " + varianceUniforme(5);
        statsContent.appendChild(p50);
    let p51 = document.createElement('p');
    p51.textContent = "Ecart-type loi uniforme de paramètre 5 : " + ecartTypeUniforme(5);
        statsContent.appendChild(p51);

    /* --- Pierre-Feuille-Ciseaux --- */
    let p52 = document.createElement('p');
    p52.textContent = "Pourcentage de parties gagnées : " + nbGamesWon / nbGames * 100 + "%";
        statsContent.appendChild(p52);
    let p53 = document.createElement('p');
    p53.textContent = "Valeur théorique : " + (choixSets[0][1] * esperanceBin(1, 1/3) + choixSets[0][2] * esperanceBin(2, 1/3)  + choixSets[0][3] * esperanceBin(3, 1/3) + choixSets[0][4] * esperanceBin(4, 1/3) + choixSets[0][5] * esperanceBin(5, 1/3) + choixSets[0][6] * esperanceBin(6, 1/3)) / nbGames * 100 + "%";
        statsContent.appendChild(p53);
    let p54 = document.createElement('p');
    p54.textContent = "Variance (binomiale pondérée selon le nombre de manches souhaité) : " + (choixSets[0][1] * varianceBin(1, 1/3) + choixSets[0][2] * varianceBin(2, 1/3)  + choixSets[0][3] * varianceBin(3, 1/3) + choixSets[0][4] * varianceBin(4, 1/3) + choixSets[0][5] * varianceBin(5, 1/3) + choixSets[0][6] * varianceBin(6, 1/3)) / nbGames;
        statsContent.appendChild(p54);
    let p55 = document.createElement('p');
    p55.textContent = "Ecart-type (binomiale pondérée selon le nombre de manches souhaité) : " + Math.sqrt((choixSets[0][1] * varianceBin(1, 1/3) + choixSets[0][2] * varianceBin(2, 1/3)  + choixSets[0][3] * varianceBin(3, 1/3) + choixSets[0][4] * varianceBin(4, 1/3) + choixSets[0][5] * varianceBin(5, 1/3) + choixSets[0][6] * varianceBin(6, 1/3)) / nbGames);
        statsContent.appendChild(p55);

    let p56 = document.createElement('p');
    p56.textContent = "Pourcentage de manches gagnées : " + nbSetsWon / nbSets * 100 + "%";
        statsContent.appendChild(p56);
    let p57 = document.createElement('p');
    p57.textContent = "Valeur théorique : " + 1/3 * 100 + "%";
        statsContent.appendChild(p57);
    let p58 = document.createElement('p');
    p58.textContent = "Pourcentage de manches nulles : " + nbSetsNull / nbSets * 100 + "%";
        statsContent.appendChild(p58);
    let p59 = document.createElement('p');
    p59.textContent = "Valeur théorique : " + 1/3 * 100 + "%";
        statsContent.appendChild(p59);
    let p60 = document.createElement('p');
    p60.textContent = "Pourcentage de manches perdues : " + (nbSets - nbSetsNull - nbSetsWon) / nbSets * 100 + "%";
        statsContent.appendChild(p60);
    let p61 = document.createElement('p');
    p61.textContent = "Valeur théorique : " + 1/3 * 100 + "%";
    statsContent.appendChild(p61);
}


