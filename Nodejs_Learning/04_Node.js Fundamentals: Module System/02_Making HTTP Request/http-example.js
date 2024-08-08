// const http = require('http'); // or use https
// const http = require('https');
// const { request } = require('http');
const { get } = require('https'); // getting data from the server
// and not sending any data to the direction

// http.request('www.google.com', (res) => {
// 	res.on('data', (chunk) => {
//       console.log(`Data chunk: ${chunk}`);
// 	});
// 	res.on('end', () => {
// 		console.log('No more data');
// 	});
// });

// req.end();

// const req = http.request('http://www.google.com/', (res) => {
// 	res.on('data', (chunk) => {
//       console.log(`Data chunk: ${chunk}`);
// 	});
// 	res.on('end', () => {
// 		console.log('No more data');
// 	});
// });

// req.end();

// const req = request('http://www.google.com/', (res) => {
// 	res.on('data', (chunk) => {
//       console.log(`Data chunk: ${chunk}`);
// 	});
// 	res.on('end', () => {
// 		console.log('No more data');
// 	});
// });

// req.end();

const req = get('https://www.google.com/', (res) => {
	res.on('data', (chunk) => {
      console.log(`Data chunk: ${chunk}`);
	});
	res.on('end', () => {
		console.log('No more data');
	});
});

// there is no need to use end(), if use get function