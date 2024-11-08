# Why are Type Guards Necessary? Discuss Various Types of Type Guards and Their Use Cases.


In typescript we can use various type guards to make our code more robust and error proof. It is not uncommon that sometimes we may forget to use proper types / objects in our code, which can lead to unexpected behavior in runtime.

To make our app/software handle these error/corner cases we should/need to use type guards.

Here we discuss about various type guards:

1. `typeof`
	
	using `typeof` we can quickly check/get the type of a variable and perform operations accordingly.
	
	example
	```ts
	const add = (p1: number | string, p2: number | string): string | number => {
		if (typeof p1 === 'number' && typeof p2 === 'number') return p1 + p2;
		return p1.toString() + p2.toString();
	}

	console.log(add(1, '1'));
	console.log(add(1, 1));
	```
	the code above will output:
	```
	11
	2
	```

1. `instanceof`
   
	if we need to check if an object is an instance of some specific class we can use `instanceof`

	example
	```ts
	class Dog {
		bark = (): void => {
			console.log('DOG is barking..');
		}
	}

	class Cat {
		meow = (): void => {
			console.log('CAT is meowing..');
		}
	}

	const makeSound = <T>(pet: T): void => {
		if (pet instanceof Cat) pet.meow();
		else if (pet instanceof Dog) pet.bark();
	}

	makeSound(new Cat());
	makeSound(new Dog());
	```
	the code above will output:
	```
	CAT is meowing..
	DOG is barking..
	```

1. `in`
   
	using `in` we can check if a specific property exists in an object.

	example
	```ts
	const exists = (obj: any, key: string) => {
		if (key in obj) {
			console.log(`${key} exists`);
		}
		else {
			console.log(`${key} does not exist`);
		}
	}

	exists({ a: 'a', b: 'b' }, 'a');
	exists({ a: 'a', b: 'b' }, 'c');
	```
	the above code will output:
	```
	a exists
	c does not exist
	```