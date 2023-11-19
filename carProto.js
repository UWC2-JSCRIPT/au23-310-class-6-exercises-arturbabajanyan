/**
 * Car class
 * @constructor
 * @param {String} model
 */

//  Create an instance, accelerate twice, brake once, and console log the instance.toString()

class Car {
    constructor(model) {
        this.currentSpeed = 0;
        this.model = model;
    }

    accelerate() {
        this.currentSpeed += 1;
    }

    break() {
        this.currentSpeed -= 1;
    }

    toString() {
        return `${this.model} model car is moving with the speed of ${this.currentSpeed}`;
    }
}

const rav4 = new Car('Rav4');
rav4.accelerate();
rav4.accelerate();
rav4.break();

console.log(rav4.toString());


/**
 * ElectricCar class
 * @constructor
 * @param {String} model
 */

//  Create an instance, accelerate twice, brake once, and console log the instance.toString()

const electricCar = Object.create(Car);

const rav4Prime = new electricCar('Rav4 Prime')
rav4Prime.accelerate();
rav4Prime.accelerate();
rav4Prime.break();

console.log(rav4Prime.toString());