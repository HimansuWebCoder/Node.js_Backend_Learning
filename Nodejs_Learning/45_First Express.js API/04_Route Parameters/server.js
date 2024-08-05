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

app.get('/friends', (req, res) => {
   // res.send(friends);
   res.json(friends);
});

// instead of :id a better name for friend put :friendId here
// GET /friends/22
app.get('/friends/:friendId', (req, res) => {
   // beccause the above param is a string we should convert this into a number
   const friendId = Number(req.params.friendId);
   const friend = friends[friendId];
   if (friend) {
      // res.json(friend);
      res.status(200).json(friend) // if explicitly doing this but express do that default
   } else {
     // res.sendStatus(404); not
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
