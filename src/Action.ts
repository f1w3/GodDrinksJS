import type Vector from "./Vector";

class Action {
    type: string;
    position: Vector;
    constructor(type: string, position: Vector) {
        this.type = type;
        this.position = position;
    }
}

export default Action;