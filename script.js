// Dice Game
function rollDice() {
  const dice1 = document.getElementById('dice1');
  const dice2 = document.getElementById('dice2');
  
  dice1.classList.add('dice-rolling');
  dice2.classList.add('dice-rolling');
  
  setTimeout(() => {
    const randomNum1 = Math.floor(Math.random() * 6) + 1;
    const randomNum2 = Math.floor(Math.random() * 6) + 1;
    
    dice1.innerHTML = randomNum1;
    dice2.innerHTML = randomNum2;
    
    dice1.classList.remove('dice-rolling');
    dice2.classList.remove('dice-rolling');
  }, 1000);
}
