module.exports.REQUEST_TIMEOUT = 500;

function encrypt(data) {
	return 'encrypted data';
}

module.exports.send = function send(url, data) {
 const encryptedData = encrypt(data);
 console.log(`sending ${encryptedData} to ${url}`);
}


// we can use exports object directly here is just pointing to module.exports 
// shorthand
// we can write directly
// exports.REQUEST_TIMEOUT = 500;
// shorthand syntax

// function encrypt(data) {
// 	return 'encrypted data';
// }

// exports.send = function send(url, data) {
//  const encryptedData = encrypt(data);
//  console.log(`sending ${encryptedData} to ${url}`);
// }

// but it is recommended to use clear module.exports at last that easily see at once

// one spot see everything
// module.exports = {
// 	REQUEST_TIMEOUT,
// 	send,
// }