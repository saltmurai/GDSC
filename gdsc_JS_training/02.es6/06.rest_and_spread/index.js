function sum(a, b, ...rest) {
	let sum = a + b;
	rest.forEach(value => sum += value)
	return sum;
}


console.log(sum(2, 5, 5, 6, 7, 1, 5));



const person = { name: "Bruce Wayne", age: 23 }

const deliveryAddress = {
	street: "1007 Mountain Drive",
	city: "Gotham"
}


const details = {
	...person,
	...deliveryAddress
}

console.log(details)