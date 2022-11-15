function getDate() {
	const date = new Date();
	const formattedDate = `${date.getFullYear()}/${date.getMonth()}/${date.getDate()}`
	return formattedDate;
}


function logMessage(message, prefix = getDate()) {
	console.log(`${prefix} - ${message}`)
}

logMessage("Hello there")