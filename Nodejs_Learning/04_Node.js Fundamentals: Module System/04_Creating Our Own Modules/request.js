function encrypt(data) {
	return 'encrypted data';
}

function send(url, data) {
 const encryptedData = encrypt(data);
 console.log(`sending ${encryptedData} to ${url}`);
}

module.exports = {
	send,
};

// module.exports = {
// 	send: send,
// }

// export send is the same name send function we already has
// we use shorthand syntax like this
// console.log(module);