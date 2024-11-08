
class Car {
	private make: string;
	private model: string;
	private year: number;

	constructor(make: string, model: string, year: number) {
		this.make = make;
		this.model = model;
		this.year = year;
	}

	public getCarAge = (): number => {
		return new Date().getFullYear() - this.year;
	}
}


const car = new Car("Honda", "Civic", 2018);
const r7 = car.getCarAge();
console.log(r7);