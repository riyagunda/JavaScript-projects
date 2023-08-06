let compChoice;
      let playerChoice;
      let pText;
      let cText;
      let result;

      const score = JSON.parse(localStorage.getItem('gameScore')) || {
        wins : 0,
        losses : 0,
        ties : 0
      }; 
      
      onScreenScore();

      function computerPlay() {
        return Math.round(Math.random(1) * 2);
      }
      
      
      function playGame(compMove) {
        if(playerChoice === 0) {
          pText = 'Rock';
          if(compChoice === 0) {
            cText = 'Rock';
            console.log('It\'s a tie!');
            score.ties++;
            result = 'tie';
          } else if (compChoice === 1) {
            cText = 'Paper';
            console.log('Computer wins!');
            score.losses++;
            result = 'lose';
          } else if (compChoice === 2) {
            cText = 'Scissors';
            console.log('You win!');
            score.wins++;
            result = 'win';
          }
        } else if (playerChoice === 1) {
          pText = 'Paper';
          if(compChoice === 0) {
            cText = 'Rock';
            console.log('You win!');
            score.wins++;
            result = 'win';
          } else if (compChoice === 1) {
            cText = 'Paper';
            console.log('It\'s a tie!');
            score.ties++;
            result = 'tie';
          } else if (compChoice === 2) {
            cText = 'Scissors';
            console.log('Computer wins!');
            score.losses++;
            result = 'lose';
          }
        } else if (playerChoice == 2) {
          pText = 'Scissors';
          if(compChoice === 0) {
            cText = 'Rock';
            console.log('Computer wins!');
            score.losses++;
            result = 'lose';
          } else if (compChoice === 1) {
            cText = 'Paper';
            console.log('You win!');
            score.wins++;
            result = 'win';
          } else if (compChoice === 2) {
            cText = 'Scissors';
            console.log('It\'s a tie!');
            score.ties++;
            result = 'tie';
          }
        }

        switch(compChoice) {
          case 0:
            compMoveText = 'Rock';
            break;
          case 1:
            compMoveText = 'Paper';
            break;
          case 2:
            compMoveText = 'Scissors';
            break;
        }
        localStorage.setItem('gameScore',JSON.stringify(score));
        //alert(`You played ${pText} and the computer played ${cText}.
//Wins: ${score.wins}, Losses: ${score.losses}, Ties: ${score.ties}`);
        onScreenScore();
        onScreenResult();
      }

      function onScreenScore() {
        document.querySelector('.js-score-tracker').innerText = `Wins: ${score.wins}, Losses: ${score.losses}, Ties: ${score.ties}`;
      }

      function onScreenResult() {
        if(result === 'tie') {
          document.querySelector('.js-result').innerHTML = 'It\'s a tie!';
        } else if (result === 'win') {
          document.querySelector('.js-result').innerHTML = 'You win!';
        } else {
          document.querySelector('.js-result').innerHTML = 'You lose :(';
        }

        document.querySelector('.js-choice').innerHTML = `You <img src="images/${pText}.png" class = 'move-icon'> 
        <img src="images/${cText}.png" class = 'move-icon'> Computer`;
      }

      function autoPlay() {
        setInterval(function() {
          const compPlay = computerPlay();
          playGame(compPlay);
        },1000);
      }