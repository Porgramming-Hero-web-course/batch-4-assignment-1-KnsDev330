
const validateKeys = <T extends object>(obj: T, keys: (keyof T)[]) => {
	let r = true;
	keys.forEach(key => {
		if (!(key in obj)) {
			r = false;
		}
	});
	return r;
}

const person1 = { name: "Alice", age: 25, email: "alice@example.com" };

const r8 = validateKeys(person1, ["name", "age"]);
console.log(r8);