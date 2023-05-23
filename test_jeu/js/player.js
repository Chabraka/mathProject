

function updateStats() {
    const maxHearts = 10; // Nombre maximum de cœurs affichés
    const heartsPerHeartContainer = Math.ceil(maxLifePV / maxHearts); // Calcul du nombre de points de vie par cœur affiché
  
    const heartContainers = Math.floor(lifePV / heartsPerHeartContainer); // Calcul du nombre de conteneurs de cœurs pleins
    const remainingHearts = lifePV % heartsPerHeartContainer; // Calcul du nombre de cœurs restants à afficher dans le dernier conteneur
  
    let heartsHTML = '';
  
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
  
    document.querySelector('.lifePV').innerHTML = heartsHTML;
    document.querySelector('.money').textContent = money;
}
