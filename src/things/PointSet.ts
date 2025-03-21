import Lovable from "../Lovable";
import Attribute from "../Attribute";

class PointSet extends Lovable {
    resetDimentions() {
        console.log("Dimentions reset");
    }

    getDimentions() {
        console.log("Dimentions retrieved");

        return {
            toAttribute: () => Attribute.PointSet
        };
    }
}

export default PointSet;