import type Attribute from "./Attribute";
import type Vector from "./Vector";
import Action from "./Action";
import type World from "./World";

class Lovable {
    name: string;
    one: number;
    two: boolean;
    three: number;
    four: boolean;

    attributes: Attribute[] = [];
    actions: Action[] = [];
    feelings: string[] = [];
    constructor(
        name: string,
        one: number,
        two: boolean,
        three: number,
        four: boolean
    ) {
        this.name = name;
        this.one = one;
        this.two = two;
        this.three = three;
        this.four = four;
    }

    addAttribute(attribute: Attribute) {
        this.attributes.push(attribute);
    }

    addAction(actionName: string, position: Vector) {
        this.actions.push(new Action(actionName, position));
    }

    getXPosition() {
        return 0;
    }

    getYPosition() {
        return 0;
    }

    setLimit(limit: number) {
        console.log(`Limit set to ${limit}`);
    }

    toLimit() {
        return 0;
    }

    toggleCurrent() {
        console.log("Current toggled");
    }

    canSee(value: boolean) {
        console.log(`Can see: ${value}`);
    }

    addFeeling(feeling: string) {
        this.feelings.push(feeling);
    }

    getNumStimulationsAvailable() {
        return 0;
    }

    getNumStimulationsNeeded() {
        return 0;
    }

    setSatisfaction(value: number) {
        console.log(`Satisfaction set to ${value}`);
    }

    toSatisfaction() {
        return 0;
    }

    getFeelingIndex(feeling: string) {
        return this.feelings.indexOf(feeling);
    }

    requestExecution(world: World) {
        console.log("Execution requested");
    }

    setProof(value: number) {}

    toProof() {
        return 0;
    }

    toggleGender() {}

    toggleRoleBDSM() {}

    getSenseIndex(sense: string) {
        return false;
    }

    lookFor(thing: Lovable, world: World) {}

    getMemory() {
        return {
            isErasable: () => {
                return true;
            },
        };
    }

    removeFeeling(feeling: string) {
        console.log(`Remove feeling: ${feeling}`);
    }

    getOpinionIndex(value: string) {
        return "opnion";
    }

    setOpinion(opnion: string, value: boolean) {
        console.log(`Set opnion: ${opnion} to ${value}`);
    }

    setExecution(execution: string) {
        console.log(`Set execution: ${execution}`);
    }

    toExecution() {
        return "execution";
    }

    escape(world: World | string) {
        console.log("Escape");
    }

    learnTopic(arg0: string) {}

    takeExamTopic(arg0: string) {}

    getAlgebraicExpression(arg0: string) {}
}

export default Lovable;
