import Lovable from "../Lovable";
import Attribute from "../Attribute";

class Eggplant extends Lovable {
    resetNutrients() {
        console.log("Resetting nutrients");
    }

    getNutrients() {
        return {
            toAttribute: () => Attribute.Circle
        };
    }
}

export default Eggplant;