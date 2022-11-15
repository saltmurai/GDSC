const person = {
	name: "Bruce Wayne",
	age: "23",
	isOrphan: true
}

const { name, age: bruceAge, isOrphan } = person

console.log(name);
console.log(bruceAge);
console.log(isOrphan);


const fruits = ["apple", "banana", "pear"]
const [first, second, third] = fruits;

const [min, max] = [5, 9]

if (min > max) {
	[min, max] = [max - min]
}

console.log(`Min ${min}`)
console.log(`Max ${max}`)

// const task = {
// 	name: "Save gotham city"
// }
// const { name, createdAt = new Date()} = task


function logBreed({ breed }) {
	console.log(breed);
}


const dog = {
	name: "Max",
	breed: "labrador",
	color: "brown",
	age: 8
}

logBreed(dog)