function decrypt(data) {
	return 'decrypted data';
}

// function read() {
// 	return decrypt('data');
// }

module.exports.read = function read() {
	return decrypt('data');
}

// module.exports = {
// 	read,
// }

// module.exports = read;