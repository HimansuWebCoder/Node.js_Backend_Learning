const { send } = require('./request');
const { read } = require('./response');
const { REQUEST_TIMEOUT } = require('./request');

function makeRequest(url, data) {
	send(url, data);
	return read();
}

const responseData = makeRequest('https://google.com', 'hello');
console.log(responseData);

console.log(require.cache);

// npm init - manually create own module
// npm init -y (yes to all questions or default all set yes)
// npm i axios -> i means install
// npm install axios

// then add "start": "node https.js" in script in package.json
// to start when run npm start or npm run start in terminal
// npm start - shorthand
// npm run start - and most script need full npm run and then name of script
