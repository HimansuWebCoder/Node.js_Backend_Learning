// const getMessages = (req, res) => {
//    res.send('<ul><li>Helloo Albert!</li></ul>');
// };

// use named functions for node show clearly error about this in which function that error have
// node don't give us that named function when using variable expression 
// so use function for more debugging

function getMessages(req, res) {
   res.send('<ul><li>Helloo Albert!</li></ul>');
};

function postMessages(req, res) {
   console.log('Updating messages...');
}

module.exports = {
   getMessages,
   postMessages, 
};

