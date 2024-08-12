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

server.on('request', (req, res) => {
	const items = req.url.split('/');
	// /friends/2 => ['', 'friends', '2']
	if (items[1] === 'friends') {
		res.statusCode = 200;
		res.setHeader('Content-Type', 'application/json');
		if (items.length === 3) {
			const friendIndex = Number(items[2]); // because it is a string above we did split so convert it in number either +items[2] (shorthand) or Number(items[2]);
			res.end(JSON.stringify(friends[friendIndex]));
		} else {
			res.end(JSON.stringify(friends));
		}
		res.end(JSON.stringify());
	} else if (items[1] === 'messages') {
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

// Now our code is far from perfect. I definitely don't recommend doing this in production above parameter add id and acess 
// For example, if we tried to get an index that's not in our friends array, well, the server doesn't respond like friends/4
// The server should probably be telling us 404 not found because the friend with ID 4 doesn't exist.
// And we wouldn't go around writing a larger server where we're hard coding teh length of our URLs or the amt of parameters that 
// we're passing in. This is more a quick proof of concept. 
/* What we have demonstrated, though, is how even very simple requests can start getting quite complicated when we need to pass the incoming requests
 for example, to get parameters now, we could keep improving our code here, but there needs to be a better way.
*/


/* This seems like code that could be written once really well as a package and reused in most web servers that deal with collections of data like our friends
As a developer, it's reasonable to expect to have existing packages help us with these common scenarios that feeling as a developer that a problem has been solved before
solved is a very healthy sign. It's a sign that we might want to search for an existing solution and either use that existing solution or learn from it so you don't
spend time reinventing the wheel when really good solutions already exists, & you could instead be solving the problems that make your application unique.
Of course, when you're learning and exploring mode like we are, it often pays to look behind the scenes like we have done here, but we'll look at some frameworks
that can help make our lives easier very soon. For now, let's finish exploring nodes built in way of working with HTTP.
There's a couple more interesting things to learn from how node does things. */
