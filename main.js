let CANVAS_WIDTH    = 1000;
let CANVAS_HEIGHT   = 600;
let NUM_OF_ELEMENTS = 100;
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

/* Just for debugging */
function printValue() {
    for (let i = 0; i < rectangles.length; ++i) {
        console.log(rectangles[i].x + " " + rectangles[i].height);
    }
}

function selectionSort() {
    for (let i = 0; i < rectangles.length - 1; ++i) {
        background(0, 0, 0);
        drawRectangles();
        
        let minValue = rectangles[i].value;
        let indexToSwap = i;
        
        for (let j = i + 1; j < rectangles.length; ++j) {
            if (rectangles[j].value < minValue) {
                minValue = rectangles[j].value;
                indexToSwap = j;
            }    
        }

        if (indexToSwap != i) {
            let tempValue = rectangles[i].value;
            rectangles[i].updateData(rectangles[indexToSwap].value);
            rectangles[indexToSwap].updateData(tempValue);
        }
    }
}

function setup() {
    createCanvas(CANVAS_WIDTH, CANVAS_HEIGHT);
    generateRectangles();
}

let finishedSorting = false;
let i = 0;

// @TODO: Find a way to make this function cleaner
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

            if (indexToSwap != i) {
                let tempValue = rectangles[i].value;
                rectangles[i].updateData(rectangles[indexToSwap].value);
                rectangles[indexToSwap].updateData(tempValue);
            }

            ++i;
        } else {
            finishedSorting = true;
        }
    }

    drawRectangles();
}