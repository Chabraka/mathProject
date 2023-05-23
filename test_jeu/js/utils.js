// Fonction pour changer le fond d'écran
function changeBackground(imageUrl) {
    document.querySelector('.background-container img').src = imageUrl;
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

