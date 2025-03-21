import type Lovable from "./Lovable";

class World {
    size: number;
    things: Lovable[] = [];
    constructor(size: number) {
        this.size = size;
    }

    addThing(thing: Lovable) {
        this.things.push(thing);
    }

    startSimulation() {
        console.log("Simulation started.");
    }

    timeTravelForTwo(
        era: "AD" | "BC",
        year: number,
        thingOne: Lovable,
        thingTwo: Lovable
    ) {
        console.log(`Time travel for two to ${era} ${year}`);
    }

    unite(thingOne: Lovable, thingTwo: Lovable) {
        console.log("Unite");
    }

    lockThing(thing: Lovable) {
        console.log(`Lock ${thing.name}`);
    }

    getGod() {
        return {
            equals: (thing: Lovable) => {
                return false;
            },
        };
    }

    procreate(thingOne: Lovable, thingTwo: Lovable) {
        console.log("Procreate");
    }

    makeHigh(thing: Lovable) {
        console.log(`Make ${thing.name} high`);
    }

    unlock(thing: Lovable) {
        console.log(`Unlock ${thing.name}`);
    }

    removeThing(thing: Lovable) {
        console.log(`Remove ${thing.name}`);
    }

    announce(...message: string[]) {
        console.log(`Announce: ${message.join()}`);
    }

    runExecution() {}

    isExecutableBy(me: Lovable) {
        return false;
    }
    
    getThingIndex(you: Lovable) {
        return this.things.indexOf(you);
    }

    execute(me: Lovable) {
        console.log(`Execute ${me.name}`);
    }
}

export default World;
