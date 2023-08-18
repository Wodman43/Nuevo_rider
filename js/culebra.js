const gameBoard = document.getElementById('game-board');
const midiv = document.getElementById('midiv');
const mibtn = document.getElementById('mibtn');

const settext = data => {
    midiv.textContent = data;
}

const gridSize = 10;
let snake = [];
let direction = 'right';
let gameInterval;

function createApple() {
    const apple = { x: Math.floor(Math.random() * gridSize), y: Math.floor(Math.random() * gridSize) };
    return apple;
}

let apple = createApple();
let isGameStarted = false;

function updateGame() {
    switch (direction) {
        case 'up':
            snake.unshift({ x: snake[0].x, y: snake[0].y - 1 });
            break;
        case 'down':
            snake.unshift({ x: snake[0].x, y: snake[0].y + 1 });
            break;
        case 'left':
            snake.unshift({ x: snake[0].x - 1, y: snake[0].y });
            break;
        case 'right':
            snake.unshift({ x: snake[0].x + 1, y: snake[0].y });
            break;
    }

    if (snake[0].x === apple.x && snake[0].y === apple.y) {
        snake.push({ x: snake[snake.length - 1].x, y: snake[snake.length - 1].y });
        apple = createApple();
    }

    if (snake[0].x < 0 || snake[0].x >= gridSize || snake[0].y < 0 || snake[0].y >= gridSize) {
        clearInterval(gameInterval);
        alert('Game Over');
        isGameStarted = false;
        return;
    }

    drawGame();
}

function drawGame() {
    gameBoard.innerHTML = '';

    snake.forEach(segment => {
        const segmentElement = document.createElement('div');
        segmentElement.style.gridRowStart = segment.y + 1;
        segmentElement.style.gridColumnStart = segment.x + 1;
        segmentElement.classList.add('snake-segment');
        gameBoard.appendChild(segmentElement);
    });

    const appleElement = document.createElement('div');
    appleElement.style.gridRowStart = apple.y + 1;
    appleElement.style.gridColumnStart = apple.x + 1;
    appleElement.classList.add('apple');
    gameBoard.appendChild(appleElement);
}

mibtn.addEventListener('click', () => {
    if (!isGameStarted) {
        getdata(permitido => {
            if (permitido) {
                isGameStarted = true;
                snake = [{ x: 2, y: 2 }]; // Reset snake position
                direction = 'right'; // Start with the snake moving to the right
                apple = createApple(); // Reset apple position
                gameInterval = setInterval(updateGame, 100);
            } else {
                settext('Acceso denegado');
            }
        });
    } else {
        switch (direction) {
            case 'up':
                direction = 'down';
                break;
            case 'down':
                direction = 'up';
                break;
            case 'left':
                direction = 'right';
                break;
            case 'right':
                direction = 'left';
                break;
        }
    }
});

// Simulated asynchronous functions
const getdata = c1 => {
    settext('¿Puedo jugar?')
    setTimeout(() => {
        c1(true);
    }, 2000);
}