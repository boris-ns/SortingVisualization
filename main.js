const CANVAS_WIDTH    = 1000;
const CANVAS_HEIGHT   = 600;
const NUM_OF_ELEMENTS = 200;
const RECT_WIDTH      = CANVAS_WIDTH / NUM_OF_ELEMENTS;

let rectangles = new Array(NUM_OF_ELEMENTS);

/* Generates random values and creates array of rectangles according 
 * to those values. */
function generateRectangles() {
    for (let i = 0; i < rectangles.length; ++i) {
        let randomValue = random(0, CANVAS_HEIGHT);
        xPos = i * RECT_WIDTH;
        yPos = CANVAS_HEIGHT - randomValue;
        rectangles[i] = new Rectangle(randomValue, xPos, yPos, RECT_WIDTH);
    }
}

/* Draws all rectangles to canvas. */
function drawRectangles() {
    for (let i = 0; i < rectangles.length; ++i) {
        rectangles[i].draw();
    }
}

/* Sets green color for all rectangles */
function setGreenColorToAll() {
    for (let i = 0; i < rectangles.length; ++i) {
        rectangles[i].active = true;
    }
}

/* Prints informations about algorithm to canvas. */
function printSortInfo(numIterations, numSwaps) {
    fill(255);
    textSize(18);
    text("Iterations: " + numIterations, 20, 30);
    text("Swaps: " + numSwaps, 20, 60);
}

/* Just for debugging */
function printValue() {
    for (let i = 0; i < rectangles.length; ++i) {
        console.log(rectangles[i].x + " " + rectangles[i].height);
    }
}

function setup() {
    createCanvas(CANVAS_WIDTH, CANVAS_HEIGHT);
    generateRectangles();
    //frameRate(20);
}

/* Visualization of sorting algorithm */
let finishedSorting = false;
let i = 0;
let numSwaps = 0;

function draw() {
    background(0, 0, 0);
    
    if (!finishedSorting) {
        if (i < rectangles.length - 1) {
            drawRectangles();
            
            let minValue = rectangles[i].value;
            let indexToSwap = i;
            
            for (let j = i + 1; j < rectangles.length; ++j) {
                if (rectangles[j].value < minValue) {
                    minValue = rectangles[j].value;
                    indexToSwap = j;
                }
            }

            rectangles[indexToSwap].active = true;

            if (indexToSwap != i) {
                let tempValue = rectangles[i].value;
                rectangles[i].updateData(rectangles[indexToSwap].value, CANVAS_HEIGHT);
                rectangles[indexToSwap].updateData(tempValue, CANVAS_HEIGHT);
                
                numSwaps++;
            }

            rectangles[i].active = false;
            ++i;
        } else {
            rectangles[i].active = false
            finishedSorting = true;
            setGreenColorToAll();
        }
    }

    printSortInfo(i, numSwaps);
    drawRectangles();
}