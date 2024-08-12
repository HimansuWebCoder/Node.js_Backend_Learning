const path = require('path'); 
// /folder/files.jpg (mac, linux), 
// \foler\files.jpg (window)

function getMessages(req, res) {
   res.sendFile(path.join(__dirname, '..', 'public', "node.jpg" ));
   // res.send('<ul><li>Helloo Albert!</li></ul>');
};

function postMessages(req, res) {
   console.log('Updating messages...');
}

module.exports = {
   getMessages,
   postMessages, 
};

