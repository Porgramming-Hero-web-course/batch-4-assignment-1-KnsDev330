
const sumArray = (a: number[]): number => {
	let sum: number = 0;
	for (let i = 0; i < a.length; i++) {
		sum += a[i];
	}
	return sum;
}


const r1 = sumArray([1, 2, 3, 4, 5]);
console.log(r1);