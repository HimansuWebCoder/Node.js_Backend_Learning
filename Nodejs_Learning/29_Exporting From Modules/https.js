// const request = require('./request');
const { send } = require('./request');
const { read } = require('./response');
// const response = require('./response');
// const read = require('./response'); // read it directly as we export function directly in response


// function makeRequest(url, data) {
// 	request.send(url, data);
// 	return read();
// }

function makeRequest(url, data) {
	send(url, data);
	return read();
}

const responseData = makeRequest('https://www.google.com', 'hello');
console.log(responseData);