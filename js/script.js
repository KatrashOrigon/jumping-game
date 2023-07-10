const jumper = document.querySelector('.jumper');
const obstacle = document.querySelector('.obstacle');
const cloud = document.querySelector('.cloud');
const gameover = document.querySelector('.gameover');

const jump = () => {
	jumper.classList.add('jump');
	setTimeout(() => {
		jumper.classList.remove('jump');}, 500);
}

const loop = setInterval(() => {
	const obstaclePosition = obstacle.offsetLeft;
	const jumperPosition = +window.getComputedStyle(jumper).bottom.replace('px', '');
	const cloudPosition = cloud.offsetLeft;
	if (obstaclePosition  <= 50 && obstaclePosition > 0 && jumperPosition < 80) {
		obstacle.style.animation = 'none';
		obstacle.style.left = `${obstaclePosition}px`;
		jumper.style.animation = 'none';
		jumper.style.bottom = `${jumperPosition}px`;
		jumper.src = './art/jumper-hit.png';
		cloud.style.animation = 'none';
		cloud.style.left = `${cloudPosition}px`;
		gameover.style.display = 'block';
		clearInterval(loop);
	}
}, 10);

document.addEventListener('keydown', jump);
