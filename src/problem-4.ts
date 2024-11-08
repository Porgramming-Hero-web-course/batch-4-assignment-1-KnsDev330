
interface Circle {
	shape: 'circle';
	radius: number;
}

interface Rectangle {
	shape: 'rectangle';
	width: number;
	height: number;
}


const calculateShapeArea = (infos: Circle | Rectangle): number => {
	if (infos.shape === 'circle') return Number((Math.PI * infos.radius * infos.radius).toFixed(2));
	return infos.width * infos.height;
}


const circleArea = calculateShapeArea({ shape: "circle", radius: 5 });
const rectangleArea = calculateShapeArea({ shape: "rectangle", width: 4, height: 6, });

console.log(circleArea)
console.log(rectangleArea)