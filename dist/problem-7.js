"use strict";
class Car {
    constructor(make, model, year) {
        this.getCarAge = () => {
            return new Date().getFullYear() - this.year;
        };
        this.make = make;
        this.model = model;
        this.year = year;
    }
}
const car = new Car("Honda", "Civic", 2018);
const r7 = car.getCarAge();
console.log(r7);
