

var playerHearts = 5; 
var lifePV = document.querySelector('.lifePV');
lifePV.innerHTML = '<i class="fa-solid fa-heart fa-xl"></i>'.repeat(playerHearts);

var playerMoney = 150; 

var moneyElement = document.querySelector('.money');
moneyElement.textContent = playerMoney;