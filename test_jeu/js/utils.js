// Fonction pour changer le fond d'écran
function changeBackground(imageUrl) {
    document.querySelector('.background-container img').src = imageUrl;
}

//Fonction pour afficher les images
function addImage(src, alt) {
    const imageContainer = document.querySelector('.event-container');
    
    clearImage();
    
    // Créer la nouvelle balise img
    const newImage = document.createElement('img');
    newImage.setAttribute('id', 'eventImage');
    newImage.setAttribute('src', src);
    newImage.setAttribute('alt', alt);
    
    // Ajouter l'image à son conteneur
    imageContainer.appendChild(newImage);
}

//Fonction pour effacer les images
function clearImage() {
    const imageContainer = document.querySelector('.event-container');
    
    // Supprimer l'image existante s'il y en a
    const existingImage = document.querySelector('#eventImage');
    if (existingImage) {
      imageContainer.removeChild(existingImage);
    }
  }
  

// Fonction pour afficher un message de dialogue
function showMessage(message) {
    document.querySelector('.dialogue p').textContent = message;
}

// Fonction pour afficher les options de dialogue
function showOptions(options) {
    const dialogueOptions = document.getElementById('dialogueOptions');
    dialogueOptions.innerHTML = '';
    for (const option of options) {
        const button = document.createElement('button');
        button.textContent = option;
        dialogueOptions.appendChild(button);
    }
}

function delay(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}
  

function waitForOption() {
return new Promise(resolve => {
    document.querySelector('#dialogueOptions').addEventListener('click', function(event) {
    const option = event.target.textContent;
    resolve(option);
    });
});
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
