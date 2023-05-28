
async function simulatePierreFeuilleCiseaux(numPlayerWins, nbManches) {
    showMessage('D\'accord, c\'est parti !');
  
    let playerWins = 0;
    await delay(2000);
  
    for (let i = 1; i <= nbManches; i++) {
      showMessage('Manche ' + i + ': Faites votre choix.');
      showOptions(['Pierre', 'Feuille', 'Ciseaux']);
  
      let playerChoice = await waitForOption();
      console.log(playerChoice);
      playerChoice = playerChoice.toLowerCase();
  
      let opponentChoice;
  
      if(playerWins < numPlayerWins){
        opponentChoice = getLosingChoice(playerChoice);
      } else {
        opponentChoice = getWinningChoice(playerChoice);
      }
  
      showMessage('Vous avez joué ' + playerChoice + '. L\'adversaire a joué ' + opponentChoice + '.');
      await delay(2000);
  
      if (
        (playerChoice === 'pierre' && opponentChoice === 'ciseaux') ||
        (playerChoice === 'feuille' && opponentChoice === 'pierre') ||
        (playerChoice === 'ciseaux' && opponentChoice === 'feuille')
      ) {
        showMessage('Vous avez gagné la manche !');
        nbSetsWon += 1;
        playerWins++;
      } else if (
        (opponentChoice === 'pierre' && playerChoice === 'ciseaux') ||
        (opponentChoice === 'feuille' && playerChoice === 'pierre') ||
        (opponentChoice === 'ciseaux' && playerChoice === 'feuille')
      ) {
        showMessage('L\'adversaire a gagné la manche !');
      } else {
        nbSetsNull += 1;
        showMessage('La manche est nulle.');
      }
      await delay(2000);
    }
  }
  
  function getWinningChoice(playerChoice) {
    const choices = ['pierre', 'feuille', 'ciseaux'];
    const randomIndex = Math.floor(Math.random() * choices.length);
    const randomChoice = choices[randomIndex];
  
    if (randomChoice === playerChoice) {
      return randomChoice; // Fait match nul avec le joueur
    }
  
    switch (playerChoice) {
      case 'pierre':
        return randomChoice === 'feuille' ? randomChoice : 'pierre';
      case 'feuille':
        return randomChoice === 'ciseaux' ? randomChoice : 'feuille';
      case 'ciseaux':
        return randomChoice === 'pierre' ? randomChoice : 'ciseaux';
      default:
        return '';
    }
  }
  
  function getLosingChoice(playerChoice) {
    switch (playerChoice) {
      case 'pierre':
        return 'ciseaux';
      case 'feuille':
        return 'pierre';
      case 'ciseaux':
        return 'feuille';
      default:
        return '';
    }
  }