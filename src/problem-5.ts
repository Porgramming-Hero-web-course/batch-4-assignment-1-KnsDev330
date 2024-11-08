
const getProperty = <T, P extends keyof T>(obj: T, property: P) => {
	return obj[property];
}

const person = { name: "Alice", age: 30 };
const result = getProperty(person, "name");
console.log(result);