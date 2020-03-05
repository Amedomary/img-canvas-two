import { initPhysics } from './physics-js.js';
import { initRenderer } from './renderer-webgl.js';

async function main() {
	var stats = new Stats();
	stats.setMode(0);
	stats.domElement.style.position = 'absolute';
	stats.domElement.style.left = '0px';
	stats.domElement.style.top = '0px';
	document.body.appendChild(stats.domElement);

	const canvas = document.querySelector('#webgl');
	const fpsInput = document.querySelector('#fps');

	const { getData, tick, partCount } = await initPhysics();
	const { render } = await initRenderer(canvas);

	let particlesCount = partCount;
	let canvasWidth;
	let canvasHeight;

	{
		const resizeHandler = () => {
			canvasWidth = canvas.clientWidth;
			canvasHeight = canvas.clientHeight;
		}
		window.addEventListener('resize', resizeHandler);
		resizeHandler();
	}

	{
		fpsInput.value = partCount + ' dots';

		const drawFrame = (timestamp) => {
			stats.begin();

			tick(particlesCount);
			render(getData(), particlesCount, canvasWidth, canvasHeight);

			stats.end();
			requestAnimationFrame(drawFrame);
		}
		requestAnimationFrame(drawFrame);
	}
};

main();
