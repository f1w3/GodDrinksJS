import Lovable from "../Lovable";
import Vector from "../Vector";

class Circle extends Lovable {
    getTangent(value: number) {
        return new Vector(value, 0);
    }
}

export default Circle;