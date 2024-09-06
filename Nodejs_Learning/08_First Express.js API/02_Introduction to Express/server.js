const express = require("express");

const app = express();

const PORT = 3000;

// app.get('/', (req, res) => {
//    res.send('Heeeelloooooo');
// });

app.get("/", (req, res) => {
   res.send({
      id: 1,
      name: "Sir Isaac Newton",
   });
});

app.get("/messages", (req, res) => {
   res.send("<ul><li>Helloo Albert!</li></ul>");
});

app.post("/messages", (req, res) => {
   console.log("Updating messages...");
});

app.listen(PORT, () => {
   console.log(`Listening on ${PORT}....`);
});

// if create index.js file then without add start node index.js
// directly node start server.js npm start run command nice!
// it runs directly npm start
