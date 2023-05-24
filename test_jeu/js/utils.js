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


