
const updateProfile = <T>(obj: T, upd: Partial<T>): T => {
	return { ...obj, ...upd };
}


const myProfile = { name: "Alice", age: 25, email: "alice@example.com" };
const r6 = updateProfile(myProfile, { age: 26 });
console.log(r6);