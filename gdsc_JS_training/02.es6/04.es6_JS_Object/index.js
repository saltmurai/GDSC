function createPerson(name, age, orphan) {
	return {
		name: name,
		age: age,
		isOrphan: orphan
	}
}



console.log(createPerson("Bruce Wayne", 23, true));


// Computed property

const specialProperty = "hometown"

const person = {
	name: "Bruce Wayne",
	age: 23,
	getInfo: function () {
		return `${this.name} - ${this.age}`
	}
}

person[specialProperty] = "Gotham";

console.log(person);




