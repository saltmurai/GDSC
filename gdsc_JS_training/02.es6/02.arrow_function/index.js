function getInfo(firstName, age) {
	return `Hello ${firstName} - Age: ${age}`;
}

console.log(getInfo("Bruce", 21));

const getInfo2 = (gender) => {
	return `You are ${gender}`
}

console.log(getInfo2('male'))


var radius = 5;

const shape = {
	radius: 10,
	diameter: function () {
		return this.radius * 2;
	},
	diameter2: () => this.radius * 2
}

console.log(shape.diameter2())