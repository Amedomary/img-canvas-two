import { initPhysics } from './physics-js.js';
import { initRenderer } from './renderer-webgl.js';

async function main() {
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
		let lastTs = 0;
		let framesDrawn = 0;

		const drawFrame = (timestamp) => {
			tick(particlesCount);
			render(getData(), particlesCount, canvasWidth, canvasHeight);

			framesDrawn++;
			if (timestamp > lastTs + 2000) {
				fpsInput.value = (1000 * framesDrawn / (timestamp - lastTs)).toFixed(1) + ' FPS; ' + partCount + ' dots';
				lastTs = timestamp;
				framesDrawn = 0;
			}
			requestAnimationFrame(drawFrame);
		}
		requestAnimationFrame(drawFrame);
	}
};

main();
