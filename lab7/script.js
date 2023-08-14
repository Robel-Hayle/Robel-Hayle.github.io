const circleContainer = document.getElementById('circleContainer');
const startButton = document.getElementById('startButton');
const spreadCirclesButton = document.getElementById('spreadCirclesButton');

startButton.addEventListener('click', createSingleCircle);
spreadCirclesButton.addEventListener('click', spreadCircles);

function createSingleCircle() {
  const circleWidth = parseInt(document.getElementById('circleWidth').value);
  const growthAmount = parseInt(document.getElementById('growthAmount').value);
  const maxCircleSize = circleWidth * 5; // Define maximum size
  const growRate = parseInt(document.getElementById('growRate').value);
  
  const randomColor = getRandomColor();

  const circle = document.createElement('div');
  circle.className = 'circle';
  circle.style.width = circleWidth + 'px';
  circle.style.height = circleWidth + 'px';
  circle.style.backgroundColor = randomColor;

  circle.addEventListener('click', function () {
    circleContainer.removeChild(circle);
  });

  const x = Math.random() * (circleContainer.clientWidth - circleWidth);
  const y = Math.random() * (circleContainer.clientHeight - circleWidth);

  circle.style.left = x + 'px';
  circle.style.top = y + 'px';

  circleContainer.appendChild(circle);

  let currentWidth = circleWidth;
  const interval = setInterval(() => {
    currentWidth += growthAmount;
    circle.style.width = currentWidth + 'px';
    circle.style.height = currentWidth + 'px';

    if (currentWidth >= maxCircleSize) {
      clearInterval(interval);
    }
  }, growRate);
}

function getRandomColor() {
  const letters = '0123456789ABCDEF';
  let color = '#';
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

function spreadCircles() {
  const numCircles = parseInt(document.getElementById('numCircles').value);
  
  for (let i = 0; i < numCircles; i++) {
    setTimeout(createSingleCircle, i * 100); // Delay creation for better spread
  }
}
