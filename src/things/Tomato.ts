import Lovable from "../Lovable";
import Attribute from "../Attribute";

class Tomato extends Lovable {
    resetAntioxidants() {
        console.log("Antioxidants reset");
    }

    getAntioxidants() {
        return {
            toAttribute: () => Attribute.Tomato
        };
    }
}

export default Tomato;