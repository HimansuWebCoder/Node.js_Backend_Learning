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

server.on('request', (req, res) => { // req object is a readable stream and res object is a writable stream
	const items = req.url.split('/');
	// /friends/2 => ['', 'friends', '2']
	if (req.method === "POST" && items[1] === 'friends') {
        req.on('data', (data) => { // client gives a JSON format data , received as a buffer bytes 
        // to print out the data
        	const friend = data.toString();
        	console.log('Request: ', friend);
        	// parse the string into object
        	friends.push(JSON.parse(friend)); // by matching the post method, converting our data to a string to print it and then
        	// converting it again to javascript object to push to our friends array.
        })

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

// do like our image file here in this directory to post data in server
// see the images and do like that

// also by passing that id you can get that friend name 
// like http://localhost/friends/3 