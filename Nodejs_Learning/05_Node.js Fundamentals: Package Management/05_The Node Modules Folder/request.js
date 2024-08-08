const axios = require('axios');

// axios.get('https://www.google.com')
// .then((response) => {
// 	console.log(response);
// });

// run node request.js (terminal)

// try wrong type 
// axios.get('https://wwwwww.google.com') // promise object
// .then((response) => {
// 	console.log(response);
// })
// .catch((err) => {
// 	console.log(err);
// })
// .then(() => {
//  console.log('All Done');
// })

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
// chain further more

// AxiosError: getaddrinfo ENOTFOUND wwwwww.google.com

// if want npm start or npm run start then add
// "start": "node request.js" to package.json in "script";

// even if you remove node_modules and 
// run npm install 
// we should get exact dependency that we removed or deleted
