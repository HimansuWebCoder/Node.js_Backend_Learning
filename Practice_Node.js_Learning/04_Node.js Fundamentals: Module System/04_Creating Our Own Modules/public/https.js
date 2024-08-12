// const request = require('./request.js');
// ./ dot slash here means that current folder of a local module
// string is called relative path;
// run require.extensions 
// '.js'
// '.json'
// '.node'
// if this string have in public path then ../ use just one step out of to parent folder
const request = require('../request.js');

function request(url, data) {
	send(url, data);
	return read();
}