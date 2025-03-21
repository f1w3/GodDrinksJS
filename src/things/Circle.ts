import Lovable from "../Lovable";
import Attribute from "../Attribute";

class Circle extends Lovable {
    resetCircumference() {
        console.log("Circumference reset");
    }

    getCircumference() {
        return {
            toAttribute: () => Attribute.Circle
        };
    }
}

export default Circle;