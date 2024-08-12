const request = require('./request');
const response = require('./response');
// ./ dot slash here means that current folder of a local module
// string is called relative path;

// function request(url, data) {
// 	send(url, data);
// 	return read();
// }

function makeRequest(url, data) {
	request.send(url, data);
	return response.read();
}

// makeRequest('https://www.google.com', 'hello');

const responseData = makeRequest('https://www.google.com', 'hello');

console.log(responseData);