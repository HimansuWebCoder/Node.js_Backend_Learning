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
// chain further more

// change version of axios any like we do 0.20.0
// delete node_modules and see what happens after 
// run npm install
// after this show
// 1 high severity vulnerability 
// to fix this run npm audit fix and if show details of that vulnerability 
// run npm audit -> show:- 
// fix available via `npm audit fix --force`
// Will install axios@1.7.3, which is a breaking change
// if not by npm audit fix run npm audit fix ---force
// but npm audit fix works most of the time when minor update or near but 
// when not by this this show npm audit fix --force 
