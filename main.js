let CANVAS_WIDTH    = 1000;
let CANVAS_HEIGHT   = 600;
let NUM_OF_ELEMENTS = 200;
let RECT_WIDTH      = CANVAS_WIDTH / NUM_OF_ELEMENTS;

let rectangles = new Array(NUM_OF_ELEMENTS);

function generateRectangles() {
    for (let i = 0; i < rectangles.length; ++i) {
        let randomValue = random(0, CANVAS_HEIGHT);
        xPos = i * RECT_WIDTH;
        yPos = CANVAS_HEIGHT - randomValue;
        rectangles[i] = new Rectangle(randomValue, xPos, yPos, RECT_WIDTH);
    }
}

function drawRectangles() {
    for (let i = 0; i < rectangles.length; ++i) {
        rectangles[i].draw();
    }
}

function setup() {
    createCanvas(CANVAS_WIDTH, CANVAS_HEIGHT);
    generateRectangles();
}

function draw() {
    background(0, 0, 0);
    drawRectangles();
}