
// Récupérer les éléments HTML correspondants aux curseurs et aux valeurs affichées
const strongerMonstersInput = document.getElementById('stronger-monsters-input');
const strongerMonstersValue = document.getElementById('stronger-monsters-value');

const changeCharsInput = document.getElementById('change-chars-input');
const changeCharsValue = document.getElementById('change-chars-value');

const meetCharsInput = document.getElementById('meet-chars-input');
const meetCharsValue = document.getElementById('meet-chars-value');

const meetMonstersInput = document.getElementById('meet-monsters-input');
const meetMonstersValue = document.getElementById('meet-monsters-value');

// Écouter les événements de changement de valeur des curseurs
strongerMonstersInput.addEventListener('input', updateStrongerMonstersValue);
changeCharsInput.addEventListener('input', updateChangeCharsValue);
meetCharsInput.addEventListener('input', updateMeetCharsValue);
meetMonstersInput.addEventListener('input', updateMeetMonstersValue);

// Fonctions de mise à jour des valeurs affichées
function updateStrongerMonstersValue() {
  paramMeetMonsters = Number(strongerMonstersInput.value);
  strongerMonstersValue.textContent = paramMeetMonsters;
  updateParams();
}

function updateChangeCharsValue() {
  paramMeetCharacters = Number(changeCharsInput.value);
  changeCharsValue.textContent = paramMeetCharacters;
  updateParams();
}

function updateMeetCharsValue() {
  paramRadeForCharacters = Number(meetCharsInput.value);
  meetCharsValue.textContent = paramRadeForCharacters;
  updateParams();
}

function updateMeetMonstersValue() {
  paramRadeForMonsters = Number(meetMonstersInput.value);
  meetMonstersValue.textContent = paramRadeForMonsters;
  updateParams();
}