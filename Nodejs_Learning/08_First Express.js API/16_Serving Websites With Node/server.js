const express = require('express');
const path = require('path');

const friendsRouter = require('./routes/friends.router');
const messagesRouter = require('./routes/messages.router');

const app = express();

const PORT = 3000;

app.use((req, res, next) => {
   const start = Date.now();
   next();
   const delta = Date.now() - start; 
   console.log(`${req.method} ${req.baseUrl} ${req.url} ${delta}ms`);
})

// app.use('/site', express.static('public'));
app.use('/site', express.static(path.join(__dirname, 'public')));
app.use(express.json());

app.use('/friends', friendsRouter);
app.use('/messages', messagesRouter)

app.listen(PORT, () => {
	console.log(`Listening on ${PORT}....`);
});


// check localhost:300/site/index.html or only /site
// if run fro cd route folder
// node ../server.js
// not found that file instead of passing absolute path join path
// after join path then work properly from any dir like from route
// static file images or static files contains like in docker, akamai, CDN or aws
