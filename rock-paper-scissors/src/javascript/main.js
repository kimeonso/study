let playerScore = 0;
let computerScore = 0;
let gamesPlayed = 0;
const maxGames = 10;

function computerChoice() {
  const choices = ['가위', '바위', '보'];
  const randomIndex = Math.floor(Math.random() * 3);
  return choices[randomIndex];
}

function updateGameEnd() {
  const resultElement = document.getElementById('result');
  const buttons = document.querySelector('.choices');
  buttons.style.display = 'none';
  if (playerScore > computerScore) {
    resultElement.textContent = '게임종료! 플레이어 승리!';
  } else if (computerScore > playerScore) {
    resultElement.textContent = '게임종료! 컴퓨터 승리!';
  } else {
    resultElement.textContent = '게임종료! 무승부!';
  }
  const restartButton = document.createElement('button');
  restartButton.textContent = '다시 시작';
  restartButton.onclick = () => location.reload();
  const gameInfo = document.querySelector('.game-info');
  gameInfo.appendChild(restartButton);
}

function play(playerSelection) {
  if (gamesPlayed === maxGames) {
    updateGameEnd();
    return;
  }

  const computerSelection = computerChoice();
  let resultText = '';
  if (
    (playerSelection === '가위' && computerSelection === '보') ||
    (playerSelection === '바위' && computerSelection === '가위') ||
    (playerSelection === '보' && computerSelection === '바위')
  ) {
    playerScore++;
    document.getElementById('playerScore').textContent = playerScore;
    resultText = `플레이어 승리! 남은 횟수: ${maxGames - ++gamesPlayed}`;
  } else if (playerSelection === computerSelection) {
    resultText = `무승부! 남은 횟수: ${maxGames - ++gamesPlayed}`;
  } else {
    computerScore++;
    document.getElementById('computerScore').textContent = computerScore;
    resultText = `컴퓨터 승리! 남은 횟수: ${maxGames - ++gamesPlayed}`;
  }
  document.getElementById('result').textContent = resultText;
  if (gamesPlayed === maxGames) {
    updateGameEnd();
  }
}
