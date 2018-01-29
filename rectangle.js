class Rectangle {

    /* value - value that this rectangle represents
     * x, y  - rectangle position  
    */ 
    constructor(value, x, y, width) {
        this.value = value;
        this.x = x;
        this.y = y;

        this.width  = width;
        this.height = value;

        this.active = false;
    }

    /* Draw rectangle to canvas */
    draw() {
        // If rectangle is active make it green, else white
        this.active ? fill(0, 255, 0) : fill(255, 255, 255);
        rect(this.x, this.y, this.width, this.height);
    }

    /* Updates the values of class after moving object in array of rectangles */
    updateData(value) {
        this.y = 600 - value; // @TODO: This is bad, use CANVAS_HEIGHT somehow ??!
        this.value  = value;
        this.height = value;
    }
};