async function updateStatsWithEquipment(equipment)
   {

    await delay(1500);
        if (equipment.category === 'artefact') {
            maxLifePV += equipment.value;
            updateStats();
            showMessage('Votre maximum de points de vie est de ' + maxLifePV);
            artefacts.push(equipment.name);
            console.log(artefacts);
        } 
        else if (equipment.category === 'bouclier') {
            if (equipment.value > defense) {
            defense = equipment.value;
            equipmentDef = equipment.name;
            console.log(defense);
            console.log(equipmentDef);
            updateStats();
            }
            showMessage('Votre défense est de ' + defense);
        } 
        else if (equipment.category === 'épée') { 
            if (equipment.value > attaque) {
            attaque = equipment.value;
            equipmentAtt = equipment.name;
            console.log(attaque);
            console.log(equipmentAtt);
            updateStats();
            }
            showMessage('Votre attaque est de ' + attaque);
        }

}

/*plus la valeur de l'equipement est haute moins elle a de chance d'apparaitre : geo inversée */

function probaGeo(param, k) {
  return Math.pow(1 - param, k - 1) * param;
}

function getRandomEquipment(category) {
  const artifacts = [
      { name: 'bague', category: 'artefact', value: 10 },
      { name: 'collier', category: 'artefact', value: 15 },
      { name: 'bracelet', category: 'artefact', value: 8 },
      { name: 'gant', category: 'artefact', value: 12 },
      { name: 'écharpe', category: 'artefact', value: 20 },
      { name: 'chapeau', category: 'artefact', value: 7 }
  ];

  const shields = [
      { name: 'tole', category: 'bouclier', value: 20 },
      { name: 'bouclier ancien', category: 'bouclier', value: 30 },
      { name: 'bouclier en bois', category: 'bouclier', value: 40 },
      { name: 'armure', category: 'bouclier', value: 85 },
      { name: 'armure en or', category: 'bouclier', value: 150 }
  ];

  const swords = [
      { name: 'vieille épée', category: 'épée', value: 30 },
      { name: 'lance', category: 'épée', value: 45 },
      { name: 'épée de chevalier', category: 'épée', value: 80 },
      { name: 'laser', category: 'épée', value: 150 },
      { name: 'massue', category: 'épée', value: 25 }
  ];

  let categoryObjects;
  let param;

  if (category === 'artefact') {
      categoryObjects = artifacts;
  } else if (category === 'bouclier') {
      categoryObjects = shields;
  } else if (category === 'épée') {
      categoryObjects = swords;
  } else {
      console.log('Catégorie invalide');
      return null;
  }

  const maxValue = Math.max(...categoryObjects.map(obj => obj.value));
  const totalValues = categoryObjects.reduce((acc, obj) => acc + obj.value, 0);
  const categoryWeight = categoryObjects.length * maxValue;
  param = 1 / (categoryWeight + totalValues);

  console.log('Probabilités des objets :');
  for (const obj of categoryObjects) {
      const probability = probaGeo(param, obj.value);
      console.log(`${obj.name} - Probabilité : ${probability}`);
  }

  const rand = Math.random();
  const geoIndex = geometrique(param, rand);
  const index = Math.min(geoIndex, categoryObjects.length) - 1;
  return categoryObjects[index];
}

/*function getRandomEquipment(category) {
  let categoryObjects;
  let param;

  if (category === 'artefact') {
      categoryObjects = [
          { name: 'bague', category: 'artefact', value: 10 },
          { name: 'collier', category: 'artefact', value: 15 },
          { name: 'bracelet', category: 'artefact', value: 8 },
          { name: 'gant', category: 'artefact', value: 12 },
          { name: 'écharpe', category: 'artefact', value: 20 },
          { name: 'chapeau', category: 'artefact', value: 7 }
      ];
  } else if (category === 'bouclier') {
      categoryObjects = [
          { name: 'tole', category: 'bouclier', value: 20 },
          { name: 'bouclier ancien', category: 'bouclier', value: 30 },
          { name: 'bouclier en bois', category: 'bouclier', value: 40 },
          { name: 'armure', category: 'bouclier', value: 85 },
          { name: 'armure en or', category: 'bouclier', value: 150 }
      ];
  } else if (category === 'épée') {
      categoryObjects = [
          { name: 'vieille épée', category: 'épée', value: 30 },
          { name: 'lance', category: 'épée', value: 45 },
          { name: 'épée de chevalier', category: 'épée', value: 80 },
          { name: 'laser', category: 'épée', value: 150 },
          { name: 'massue', category: 'épée', value: 25 }
      ];
  } else {
      console.log('Catégorie invalide');
      return null;
  }
  

  const totalInverseValues = categoryObjects.reduce((acc, obj) => acc + (1 / obj.value), 0);
  param = 1 / totalInverseValues;

  console.log('Probabilités des objets :');
  for (const obj of categoryObjects) {
      const probability = (1 / obj.value) * param;
      console.log(`${obj.name} - Probabilité : ${probability}`);
  }

  const rand = Math.random();
  let cumulativeProbability = 0;
  for (const obj of categoryObjects) {
      const probability = (1 / obj.value) * param;
      cumulativeProbability += probability;
      if (rand <= cumulativeProbability) {
          return obj;
      }
  }

  return null;
}*/