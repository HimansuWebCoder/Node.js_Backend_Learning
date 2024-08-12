const http = require('http');

const PORT = 3000;

const server = http.createServer();

const friends = [
	 {
	 	id: 0,
	 	name: 'Nikola Tesla',
	 },
	 {
	 	id: 1,
	 	name: 'Sir Isaac Newton',
	 },
	 {
	 	id: 2,
	 	name: 'Albert Einstein',
	 },
]

// csv ----> pipe ---> server
// readable.pipe(writeable);
// like that above we can do 
// JSON {} ---> pipe ----> JSON {} // same data to client what the client request and response as like same
// same json back to the browser
// This is the power of nodes approach to using streams.
// We could echo the data back like in this flow, but we could also pipe it and stream it to another server or 
// process it somehow, as it comes.

server.on('request', (req, res) => { // request object is a readable stream and response object is a writable stream
	const items = req.url.split('/');
	// /friends/2 => ['', 'friends', '2']
	// /friends/ don't do like friends/ slash then this create confusion to another parameter request so.
	if (req.method === "POST" && items[1] === 'friends') {
        req.on('data', (data) => { // client gives a JSON format data , received as a buffer bytes 
        // to print out the data
        	const friend = data.toString();
        	console.log('Request: ', friend);
        	friends.push(JSON.parse(friend));
        	// req.pipe(res); // this give error when fetch in browser for post and return back data (incomplete request) so for this
        	// res.pipe(res) under callback and this callback function processing stage so incomplete request to response
        	// so move this to outside
        })
        req.pipe(res);
	} else if (req.method === "GET" && items[1] === 'friends') {
		res.statusCode = 200;
		res.setHeader('Content-Type', 'application/json');
		if (items.length === 3) {
			const friendIndex = Number(items[2]); // because it is a string above we did split so convert it in number either +items[2] (shorthand) or Number(items[2]);
			res.end(JSON.stringify(friends[friendIndex]));
		} else {
			res.end(JSON.stringify(friends));
		}
		res.end(JSON.stringify());
	} else if (req.method === "GET" && items[1] === 'messages') {
		res.setHeader('Content-Type', 'text/html');
		res.write('<html>');
		res.write('<body>');
		res.write('<p>Hello!!!</p>');
		res.write('</body>');
		res.write('<html>');
		res.end();
	}
})

server.listen(PORT, () => {
	console.log(`Listening on port ${PORT}`);
}); // 127.0.0.1 => localhost

// like previous code practice see like that in fetch image files here dir.

/*The actual code where we work with streams and the request and the response is very, very simple.
the fundamentals for Node are very very strong. All we need is some higher level of functionality to help us avoid
some of these bugs. That we've been making when writing our barebones server. And before we go, there's no need to call 
the end function on the response. When we pipe, because the response will and whenever the request ends,
all using the power of that and streams and node.*/