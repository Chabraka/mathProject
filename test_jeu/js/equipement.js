async function updateStatsWithEquipment(equipment) {

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

function getRandomEquipment(category) {
  const artifacts = [
      { name: 'chapeau', category: 'artefact', value: 7 },
      { name: 'bracelet', category: 'artefact', value: 8 },
      { name: 'bague', category: 'artefact', value: 10 },
      { name: 'gant', category: 'artefact', value: 12 },
      { name: 'collier', category: 'artefact', value: 15 },
      { name: 'écharpe', category: 'artefact', value: 20 }
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
      { name: 'massue', category: 'épée', value: 25 },
      { name: 'lance', category: 'épée', value: 45 },
      { name: 'épée de chevalier', category: 'épée', value: 80 },
      { name: 'laser', category: 'épée', value: 150 }
  ];

  let categoryObjects;
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

  let indexObj = 1;
  let param = 1/2;
  console.log('Probabilités des objets :');
  for (const obj of categoryObjects) {
      const probability = probaGeo(param, indexObj);
      console.log(`${obj.name} - Probabilité : ${probability}`);
      indexObj ++;
  }

  const geoIndex = geometrique(param, Math.random());
  const index = Math.min(geoIndex, categoryObjects.length ) - 1;
  return categoryObjects[index];
}