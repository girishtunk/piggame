var totalScore_1, totalScore_2, currentScore_1, currentScore_2, currentPlayer, roundScore;

start();

function start() {
  currentPlayer = 1;
  globalScore = [0,0];
  roundScore = 0;
  document.getElementById('dice').style.display = 'none';
  document.getElementById('currentScore_1').textContent = 0;
  document.getElementById('currentScore_2').textContent = 0;
  document.getElementById('totalScore_1').textContent = 0;
  document.getElementById('totalScore_2').textContent = 0;
}


function roll() {
  sound();
  document.getElementById('dice').style.display = 'block';
  setTimeout(
    function () {
      var rollValue = Math.floor((Math.random()*6)+1);
      document.getElementById('dice').src = 'assets/files/dice-'+rollValue+'.png';
      if (rollValue !== 1) {
        roundScore += rollValue;
        document.getElementById('currentScore_' + currentPlayer).textContent = roundScore;
      } else {
        nextPlayer();
      }
    }
    ,1500)
}

function hold() {
  globalScore[currentPlayer-1] += roundScore;
  document.getElementById('totalScore_'+currentPlayer).textContent = globalScore[currentPlayer-1];
    if (globalScore[currentPlayer-1] >= 100 ) {
      console.log(globalScore[currentPlayer-1]);
      document.getElementById('side-1').classList.remove('active');
      document.getElementById('side-2').classList.remove('active');
      // document.getElementById('side-' + currentPlayer).classList.add('winner');
      alert('Player '+ currentPlayer +' Won the game!!!');
      start();
    } else {
      nextPlayer();
    }
}

function nextPlayer() {
  document.getElementById('side-' + currentPlayer).classList.remove('active');
  currentPlayer === 1 ? currentPlayer = 2 : currentPlayer = 1;
  document.getElementById('currentScore_1').textContent = 0;
  document.getElementById('currentScore_2').textContent = 0;
  roundScore = 0;
  document.getElementById('side-' + currentPlayer).classList.add('active');
}

function sound() {
  document.getElementById('diceSound').play();
}
