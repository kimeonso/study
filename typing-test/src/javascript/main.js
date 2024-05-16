document.addEventListener('DOMContentLoaded', () => {
  const sentenceElement = document.getElementById('sentence');
  const typingArea = document.getElementById('typing-area');
  const errorsElement = document.getElementById('errors');
  const timeElement = document.getElementById('time');
  const accuracyElement = document.getElementById('accuracy');
  const resultsElement = document.getElementById('results');
  const restartButton = document.getElementById('restart-button');
  const promptElement = document.getElementById('prompt');

  let startTime,
    errors,
    correctChars,
    currentSentenceIndex,
    totalErrors,
    totalChars,
    interval,
    timerRunning;
  const sentences = [
    'he realized what was happening and told the others.',
    'another sample sentence to type.',
  ];

  function initializeGame() {
    startTime = 20;
    errors = 0;
    correctChars = 0;
    currentSentenceIndex = 0;
    totalErrors = 0;
    totalChars = 0;
    timerRunning = false;

    typingArea.disabled = false;
    typingArea.value = '';
    resultsElement.style.display = 'none';
    restartButton.style.display = 'none';
    updateStats();
  }

  initializeGame();

  typingArea.addEventListener('click', () => {
    promptElement.style.display = 'none';
    sentenceElement.style.display = 'block';
    sentenceElement.textContent = sentences[currentSentenceIndex];
  });

  typingArea.addEventListener('input', () => {
    if (!timerRunning) {
      startTimer();
    }
    handleTyping();
  });

  function handleTyping() {
    const typedText = typingArea.value;
    let formattedText = '';
    let remainingText = sentences[currentSentenceIndex];

    errors = 0;
    for (let i = 0; i < remainingText.length; i++) {
      if (i < typedText.length) {
        if (typedText[i] === remainingText[i]) {
          formattedText += `<span class="correct">${remainingText[i]}</span>`;
        } else {
          formattedText += `<span class="incorrect">${remainingText[i]}</span>`;
          errors++;
        }
      } else {
        formattedText += `<span>${remainingText[i]}</span>`;
      }
    }

    correctChars = typedText.length - errors;
    totalErrors += errors;
    totalChars += typedText.length;
    updateStats();
    sentenceElement.innerHTML = formattedText;
  }

  typingArea.addEventListener('keydown', (event) => {
    if (event.key === 'Enter' && typingArea.value.trim().length > 0) {
      event.preventDefault();
      if (currentSentenceIndex < sentences.length - 1) {
        currentSentenceIndex++;
        sentenceElement.textContent = sentences[currentSentenceIndex];
        typingArea.value = '';
        updateStats();
      } else {
        clearInterval(interval);
        timerRunning = false;
        showResults();
      }
    }
  });

  restartButton.addEventListener('click', initializeGame);

  function startTimer() {
    clearInterval(interval);
    timerRunning = true;
    startTime = 20;
    timeElement.textContent = `${startTime}s`;
    interval = setInterval(() => {
      startTime--;
      timeElement.textContent = `${startTime}s`;
      if (startTime <= 0) {
        clearInterval(interval);
        timerRunning = false;
        showResults();
      }
    }, 1000);
  }

  function showResults() {
    resultsElement.style.display = 'block';
    restartButton.style.display = 'block';
    resultsElement.innerHTML = `
          <div class="results">
              <div>WPM: ${calculateWPM()}</div>
              <div>CPM: ${calculateCPM()}</div>
              <div>Errors: ${totalErrors}</div>
              <div>Accuracy: ${(
                ((totalChars - totalErrors) / totalChars) *
                100
              ).toFixed(2)}%</div>
          </div>`;
    typingArea.disabled = true;
  }

  function updateStats() {
    const accuracy =
      totalChars > 0 ? ((correctChars / totalChars) * 100).toFixed(2) : '100';
    accuracyElement.textContent = `${accuracy}%`;
    errorsElement.textContent = `${errors}`;
    timeElement.textContent = `${startTime}s`;
  }

  function calculateWPM() {
    return (totalChars / 5 / (20 / 60)).toFixed(2);
  }

  function calculateCPM() {
    return (totalChars / (20 / 60)).toFixed(2);
  }
});
