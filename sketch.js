let insideCount = 0;
let totalCount = 0;
const radius = 256;
const diameter = radius * 2;
let loops = 100;
let backgroundColor;
let circleColor;
let squareColor;
let running = false;


function setup() {
    createCanvas(diameter, diameter);
    backgroundColor = color(51);
    circleColor = color("#00FF00");
    squareColor = color("#FF0000");
    outlineColor = color("#FFFFFF");
    document.getElementById("speed").value = loops;
    document.getElementById("updateSpeed").onclick = () => {
        loops = document.getElementById("speed").value;
    };
    document.getElementById("startStop").onclick = function () {
        running = !running;
        if (running) {
            this.innerText = "Stop";
        } else {
            this.innerText = "Start";
        }
    };
    document.getElementById("reset").onclick = reset;
    reset();
}

function reset() {
    totalCount = 0;
    insideCount = 0;
    for (let x = 0; x < diameter; x++) {
        for (let y = 0; y < diameter; y++) {
            set(x, y, backgroundColor);
        }
    }
}

function draw() {
    if (running)
        for (let i = 0; i < loops; i++)
            addRandomPoint();
    document.getElementById("pi").innerText = String(totalCount === 0 ? 0 : (4 * insideCount / totalCount));
    updatePixels();
}

function isInCircle(x, y) {
    x -= radius;
    y -= radius;
    return x * x + y * y <= radius * radius;
}

function addRandomPoint() {
    let x = random(diameter + 1);
    let y = random(diameter + 1);
    // if(pixels[y * width + x] !=)
    addPoint(x, y);
}

function addPoint(x, y) {
    if (isInCircle(x, y)) {
        set(floor(x), floor(y), circleColor);
        insideCount++;
    } else {
        set(floor(x), floor(y), squareColor);
    }
    totalCount++;
}