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

function getRandomEquipment() {
    const artifacts = [
      { name: 'bague', category: 'artefact', value: 10 },
      { name: 'collier', category: 'artefact', value: 15 },
      { name: 'bracelet', category: 'artefact', value: 8 },
      { name: 'gant', category: 'artefact', value: 12 },
      { name: 'écharpe', category: 'artefact', value: 20 },
      { name: 'chapeau', category: 'artefact', value: 7 }
    ];
  
    const shields = [
      { name: 'tole', category: 'bouclier', value: 5 },
      { name: 'bouclier ancien', category: 'bouclier', value: 10 },
      { name: 'bouclier en bois', category: 'bouclier', value: 8 },
      { name: 'armure', category: 'bouclier', value: 12 },
      { name: 'armure en or', category: 'bouclier', value: 15 }
    ];
  
    const swords = [
      { name: 'vieille épée', category: 'épée', value: 5 },
      { name: 'lance', category: 'épée', value: 8 },
      { name: 'épée de chevalier', category: 'épée', value: 12 },
      { name: 'laser', category: 'épée', value: 15 },
      { name: 'massue', category: 'épée', value: 10 }
    ];
  
    const randomIndex = Math.floor(Math.random() * 5);
  
    const category = Math.floor(Math.random() * 3);
  
    if (category === 0) {
      return artifacts[randomIndex];
    } else if (category === 1) {
      return shields[randomIndex];
    } else {
      return swords[randomIndex];
    }
}