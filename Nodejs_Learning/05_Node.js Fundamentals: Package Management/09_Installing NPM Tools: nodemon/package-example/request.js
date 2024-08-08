const axios = require('axios');

axios.get('https://www.google.com') // promise object
.then((response) => {
	console.log(response);
})
.catch((err) => {
	console.log(err);
})
.then(() => {
 console.log('All Done');
})


// npm install nodemon 
// npm install nodemon --save-dev
// ./node_modules/.bin/nodemon