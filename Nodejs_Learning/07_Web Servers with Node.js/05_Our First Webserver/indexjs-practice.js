// const http = require('http');

// const PORT = 3000;

// const server = http.createServer((req, res) => {
// 	res.writeHead(200, {
// 		"Content-Type": 'text/plain',
// 	});
// 	res.end("Hello! Sir Isaac Newton is your friend!");
// })

// const server = http.createServer((req, res) => {
// 	res.writeHead(200, {
// 		"Content-Type": 'application/json',
// 	});
// 	res.end(JSON.stringify({
// 		id: 1,
// 		name: 'Sir Isaac Newton',
// 	}));
// });

// server.listen(PORT, () => {
// 	console.log(`Listening on port ${PORT}`);
// }); // 127.0.0.1 => localhost
// ----------------------------------------------------------------
// const http = require('http');
// const PORT = 3000;

// const server = http.createServer((req, res) => {
// 	res.writeHead(200, {
// 		'Content-Type': 'text/plain',
// 	});
// 	res.end('Hello! Himansu How are you?');
// })

// server.listen(PORT, () => {
// 	console.log(`Server running at ${PORT}`);
// });

// ------------------------------------------------------------------------
const http = require('http');
const PORT = 3000;

const server = http.createServer((req, res) => {
	res.writeHead(200, {
		'Content-Type': 'application/json',
	});
	res.end(JSON.stringify(
		{
			id: 123, 
			greet: "Hii! How are you"
		}
	));
})

server.listen(PORT, () => {
	console.log(`Server listening at ${PORT}`);
})