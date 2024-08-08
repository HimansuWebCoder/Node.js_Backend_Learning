// const internals = require('./internals');
// or destructuring read and send function
const { send, read } = require('./internals');
// const { send } = require('./internals/request');
// const { read } = require('./internals/response');

// function makeRequest(url, data) {
// 	internals.request.send(url, data);
// 	return internals.response.read();
// }

// function makeRequest(url, data) {
// 	internals.send(url, data);
// 	return internals.read();
// }

// after destructuring
function makeRequest(url, data) {
	send(url, data);
	return read();
}

const responseData = makeRequest('https://google.com', "hello");
console.log(responseData);