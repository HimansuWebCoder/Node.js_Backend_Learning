// const request = require('./request');
// const response = require('./response');

// using spread operator
module.exports = {
	...require('./request'),
	...require('./response')
}

// module.exports = {
// 	request: require('./request'),
// 	response: require("./response"),
// };

// or

// module.exports = {
// 	send: request.send,
// 	REQUEST_TIMEOUT: request.REQUEST_TIMEOUT,
// 	read: response.read,
// };

