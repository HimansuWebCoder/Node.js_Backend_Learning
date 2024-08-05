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
   const start = Date.now(); // current time in milliseconds // start time
   // console.log(`${req.method} ${req.url}`); // GET /friends here GET is method and /friends is url
   next(); // try without add this and it stuck at loading stage // when processes is done
   // so always call next function when use middleware
   //actions go here... return back
   const delta = Date.now() - start; // the time right before response gets sent back to postman
   console.log(`${req.method} ${req.url} ${delta}ms`); // GET /friends here GET is method and /friends is url (subtracts the start time from that current time to show all steps to complete)
   // vary in postman and express time so 
})

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
