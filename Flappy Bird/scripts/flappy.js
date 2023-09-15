// Con esta linea declaro que javascript se empiece a cargar una vez que todos los elementos html se cargaron
document.addEventListener('DOMContentLoaded', () => {
    const bird = document.querySelector(".bird");
    const gameDisplay = document.querySelector(".game-container");
    // const ground = document.querySelector(".ground");

    let birdLeft = 220;
    let birdBottom = 100;
    let gravity = 2;
    let isGameOver = false;
    let gap = 450;


    function startGame() {
        birdBottom -= gravity;
        bird.style.bottom = birdBottom + 'px';
        bird.style.left = birdLeft + 'px';
    }

    // El temporizador para la caida
    let gameTimerId = setInterval(startGame,20);

    // clearInterval(timerId);

    // Funcion salto
    function jump() {
        if (birdBottom > 530) {
            birdBottom = birdBottom;
        } 
        else if (birdBottom + 50 > 530) {
            birdBottom = 530;
        }
        else {
            birdBottom += 50;   
        }
        bird.style.bottom = birdBottom + 'px';
        console.log(birdBottom);
    }

    // Asigno la tecla espacio al evento de saltar
    function control(e) {
        // Se usa el 32 porque el ASCII del espacio es el 32
        if (e.keyCode === 32) {
            jump();
        }
    }

    // Creo los obstaculos
    function generateObstacle() {
        // Ubico los obstaculos en la pantalla
        let obstacleLeft = 500;
        // Con el metodo random le doy alturas aleatorias a los obstaculos
        let randomHeight = Math.random() * 60;
        let obstacleBottom = randomHeight;
        // Creo el obstaculo de abajo
        const obstacle = document.createElement('div');
        // Creo el obstaculo de arriba
        const topObstacle = document.createElement('div');

        if(!isGameOver){
            obstacle.classList.add('obstacle');
            topObstacle.classList.add('topObstacle');
        }
        // Meto los div de los obstaculos en el contenedor de la pantalla de juego
        gameDisplay.appendChild(obstacle);
        gameDisplay.appendChild(topObstacle);

        obstacle.style.left = obstacleLeft + 'px';
        obstacle.style.bottom = obstacleBottom + 'px';

        topObstacle.style.left = obstacleLeft + 'px';
        topObstacle.style.bottom = obstacleBottom + gap + 'px';

        // Funcion para mover los obstaculos
        function moveObstacle() {
            obstacleLeft -= 2;
            obstacle.style.left = obstacleLeft + 'px';
            topObstacle.style.left = obstacleLeft + 'px';
            // Elimino el obstaculo que sale de la pantalla para no llenar memoria al cuete
            if (obstacleLeft === -60) {
                clearInterval(timerId);
                gameDisplay.removeChild(obstacle);
            }
            /* 
                Evaluo la primera condicion de perdida del juego que es chocar el suelo
                Las voy a ir evaluando a todas en el mismo if
            */
            if (
                obstacleLeft > 200 && obstacleLeft < 280 && birdLeft === 220 &&
                (birdBottom < obstacleBottom + 150 || birdBottom > obstacleBottom + gap - 200) ||
                birdBottom === 0) {
                gameOver();
                clearInterval(timerId);
            }
        }
        let timerId = setInterval(moveObstacle, 15);
        if(!isGameOver){
            setTimeout(generateObstacle, 4000);
        }

    }
    generateObstacle();

    function gameOver() {
        clearInterval(gameTimerId);
        isGameOver = true;
        console.log("Game over!!")
        document.removeEventListener('keypress', control);
    }

    document.addEventListener('keypress', control);
});