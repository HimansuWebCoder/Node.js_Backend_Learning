const express = require('express');

const app = express();

const PORT = 3000;

const friends = [
    {
      id: 0,
      name: 'Albert Einstein'
    },
    {
      id: 1,
      name: 'Sir Isaac Newton'
    }
]

app.use((req, res, next) => {
   const start = Date.now();
   next();
   const delta = Date.now() - start; 
   console.log(`${req.method} ${req.url} ${delta}ms`);
})

// JSON parsing middleware
app.use(express.json());

app.post('/friends', (req, res) => {
// our servers don't understand what is JSON out of the box
   if (!req.body.name) {
      return res.status(400).json({
         error: 'Missing friend name'
      })
   }
   // and this will not execute when sending back the above missing data. so..
   // only for the success case only then executed this 
   const newFriend = {
      name: req.body.name,
      id: friends.length 
   };
   friends.push(newFriend);
   res.json(newFriend); // all of our request send json. and if data is missing like name the show Error: Cannot set headers after they are sent to the client
   // so the solution is return in res.status above
});

app.get('/friends', (req, res) => {
   res.json(friends);
});

app.get('/friends/:friendId', (req, res) => {
   const friendId = Number(req.params.friendId);
   const friend = friends[friendId];
   if (friend) {
      res.status(200).json(friend) 
   } else {
      res.status(404).json({
         error: "Friend does not exist"
      });
   }
}) 



app.get('/messages', (req, res) => {
   res.send('<ul><li>Helloo Albert!</li></ul>');
});

app.post('/messages', (req, res) => {
	console.log('Updating messages...');
});



app.listen(PORT, () => {
	console.log(`Listening on ${PORT}....`);
});
