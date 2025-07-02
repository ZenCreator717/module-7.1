document.addEventListener("DOMContentLoaded", function() {
    // Get the meme image element
    const meme = document.getElementById('meme');
  
    // Get the start and stop button elements
    const startButton = document.getElementById('start');
    const stopButton = document.getElementById('stopButton');
  
    // Check if the elements exist before using them
    if (meme && startButton && stopButton) {
      // Define the startMoving function
      function startMoving() {
        meme.classList.add('shake');
        meme.style.animationName = 'shake';
        meme.style.animationDuration = '0.5s';
        meme.style.animationIterationCount = 'infinite';
      }
  
      // Define the stopMoving function
      function stopMoving() {
        meme.classList.remove('shake');
        meme.style.animationName = '';
      }
  
      // Add event listeners to the start and stop buttons
      startButton.addEventListener('click', startMoving);
      stopButton.addEventListener('click', stopMoving);
    } else {
      console.error("One or more elements not found!");
    }
  });