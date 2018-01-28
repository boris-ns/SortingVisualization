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
    }

    /* Draw rectangle to canvas */
    draw() {
        fill(255, 255, 255);
        rect(this.x, this.y, this.width, this.height);
    }
};