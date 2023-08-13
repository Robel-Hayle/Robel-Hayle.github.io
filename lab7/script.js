const circleContainer = document.getElementById('circleContainer');
const startButton = document.getElementById('startButton');
const spreadCirclesButton = document.getElementById('spreadCirclesButton');

startButton.addEventListener('click', createSingleCircle);
spreadCirclesButton.addEventListener('click', spreadCircles);

function createSingleCircle() {
  const circleWidth = parseInt(document.getElementById('circleWidth').value);
  const growthAmount = parseInt(document.getElementById('growthAmount').value);
  const growRate = parseInt(document.getElementById('growRate').value);

  const circle = document.createElement('div');
  circle.className = 'circle';
  circle.style.width = circleWidth + 'px';
  circle.style.height = circleWidth + 'px';

  circle.addEventListener('click', function () {
    circleContainer.removeChild(circle);
  });

  circleContainer.appendChild(circle);

  let currentWidth = circleWidth;
  const interval = setInterval(() => {
    currentWidth += growthAmount;
    circle.style.width = currentWidth + 'px';
    circle.style.height = currentWidth + 'px';
  }, growRate);

  // Stop growing after 10 seconds (10000 milliseconds)
  setTimeout(() => {
    clearInterval(interval);
  }, 10000);
}

function spreadCircles() {
  const numCircles = parseInt(document.getElementById('numCircles').value);
  
  for (let i = 0; i < numCircles; i++) {
    setTimeout(createSingleCircle, i * 500); // Delay creation for better spread
  }
}
