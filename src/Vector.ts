class Vector {
    x: number;
    y: number;
    constructor(x: number, y: number) {
        this.x = x;
        this.y = y;
    }
    add(v: Vector) {
        return new Vector(this.x + v.x, this.y + v.y);
    }
    subtract(v: Vector) {
        return new Vector(this.x - v.x, this.y - v.y);
    }
    multiply(scalar: number) {
        return new Vector(this.x * scalar, this.y * scalar);
    }
    divide(scalar: number) {
        return new Vector(this.x / scalar, this.y / scalar);
    }
    get magnitude() {
        return Math.sqrt(this.x * this.x + this.y * this.y);
    }
    get normalized() {
        return this.divide(this.magnitude);
    }
    get angle() {
        return Math.atan2(this.y, this.x);
    }
    static fromAngle(angle: number, magnitude: number) {
        return new Vector(
            Math.cos(angle) * magnitude,
            Math.sin(angle) * magnitude
        );
    }
}

export default Vector;