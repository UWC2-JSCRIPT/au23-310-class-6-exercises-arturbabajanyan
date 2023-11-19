/**
 * Car class
 * @constructor
 * @param {String} model
 */

//  Create an instance, accelerate twice, brake once, and console log the instance.toString()
const gasCarAccelerate = 2;
const gasCarBreak = 1;
const electricCarAccelerate = 4;
const electricCarBreak = 2;


class Car {
    constructor(model) {
        this.currentSpeed = 0;
        this.model = model;
    }

    accelerate(speed) {
        this.currentSpeed += speed;
    }

    break(breakPedal) {
        this.currentSpeed -= breakPedal;
    }

    toString() {
        return `${this.model} model car is moving with the speed of ${this.currentSpeed}`;
    }
}

const rav4 = new Car('Rav4');
rav4.accelerate(gasCarAccelerate);
rav4.accelerate(gasCarAccelerate);
rav4.break(gasCarBreak);

console.log(rav4.toString());


/**
 * ElectricCar class
 * @constructor
 * @param {String} model
 */

//  Create an instance, accelerate twice, brake once, and console log the instance.toString()

class ElectricCar extends Car {

}

const rav4Prime = new ElectricCar("Rav4 Prime");

rav4Prime.accelerate(electricCarAccelerate);
rav4Prime.accelerate(electricCarAccelerate);
rav4Prime.break(electricCarBreak);

console.log(rav4Prime.toString());