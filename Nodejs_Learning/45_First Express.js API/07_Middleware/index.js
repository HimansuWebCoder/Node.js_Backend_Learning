// There's an idea in Express that comes up again and again, it's something that will really
// help us to understand how express works. We're talking about middleware. 
/*
How it allows us to add features to our server by working with the incoming request
and response coming out of our server.
But middleware is such an important topic to understand when it comes to express that it's really
worth taking the time to really understand it and even make our own middleware.
*/

     |           |
     |           |
     |           |
// Request      Response
     |           |
     |           |
     |           |
     Express API
     express() 


// How it looks like

app.use(function(req, res, next) {
	
})