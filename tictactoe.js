class Rectangle {
    constructor(height, width) {
      this.height = height;
      this.width = width;
    }
    // getter
    get area() {
        return this.calcArea();
    }
    // method
    calcArea() {
        return this.height * this.width;
    }
    *getSides() {
        yield this.height;
        yield this.width;
        yield this.height;
        yield this.width;
    }
  }