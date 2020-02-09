'use strict';

// MOUSE EVENT
let mouseX = 0;
let mouseY = 0;
function logKey(e) {
    mouseX = e.clientX;
    mouseY = e.clientY;
}
document.addEventListener("mousemove", logKey);
// END MOUSE

const image64 = `
data:image/jpeg;base64,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
`

const imgData = image64;
const image = document.createElement("img");
image.src = imgData;

const canvas = document.getElementById('amedomary');
canvas.width = innerWidth - 20;
canvas.height = innerHeight - 20;
const ctx = canvas.getContext('2d');

const mash = [];
const radius = 2;
const imgStep = radius * 2 + 2;

class Dot {
    constructor(x, y, color) {
        this.x = x;
        this.y = y;
        this.color = color;
        this.r = radius;
        this.state = 'passive';
        this.d = 0;
    }

    checkPosition() {
        // body
        if (this.state === 'passive') {
            if  (
                Math.abs(mouseX - this.x) < this.r * 2
                &&
                Math.abs(mouseY - this.y) < this.r * 2
            ) {
                this._color = this.color;
                this.color = 'red';
                this.state = 'active';
            }
        } else {
            if (this.d > 10) {
                this.color = this._color;
                this.state = 'passive';
            } else {
                this.d += 1;
            }
        }
    }

    reDraw() {
        ctx.fillStyle = this.color;
        ctx.beginPath();
        ctx.arc(this.x - this.r, this.y - this.r, this.r, 0, 2 * Math.PI);
        ctx.fill();
    }
};

const getImageData = function (image) {
    const canvas = document.createElement("canvas");
    canvas.width = image.width;
    canvas.height = image.height;
    const ctx = canvas.getContext("2d");
    ctx.drawImage(image, 0, 0);

    return ctx.getImageData(0, 0, image.width, image.height);
};

const imagedata = getImageData(image);

function getPixel(imagedata, x, y) {
    const position = (x + imagedata.width * y) * 4;
    const data = imagedata.data;
    return { r: data[position], g: data[position + 1], b: data[position + 2], a: data[position + 3] };
};

function createDataMash() {
    for (let y = 0, y2 = imagedata.height; y < y2; y += imgStep) {
        for (let x = 0, x2 = imagedata.width; x < x2; x += imgStep) {
            const pixelColor = getPixel(imagedata, x, y);
            const color = "rgb(" + pixelColor.r + ", " + pixelColor.g + ", " + pixelColor.b + ")";

            if (
                pixelColor.r >= 20 ||
                pixelColor.g >= 20 ||
                pixelColor.b >= 20
            ) {
                mash.push(new Dot(x, y, color));
            }
        }
    }
    requestAnimationFrame(renderLoop);
};

function reDrawDots() {
    for (let i in mash) {
        mash[i].checkPosition();
        mash[i].reDraw();
    }
};

function draw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    reDrawDots();
};

function renderLoop() {
    draw();
    // body

    requestAnimationFrame(renderLoop);
};

createDataMash();