// const mission = 'learn';

// if (mission === 'learn') {
// 	console.log('Time to write some Node code!');
// } else {
// 	console.log(`Is ${mission} really more fun?`);
// }

// process.argv[2];
const mission = process.argv[2];

if (mission === 'learn') {
	console.log('Time to write some Node code!');
} else {
	console.log(`Is ${mission} really more fun?`);
}

// run node hello.js explore to see the result (terminal)
// argv[2] in node hello.js explore node = 0, hello.js = 1, explore = 2 2nd index of an array
// try also learn instead of explore

// window not access in node.js
// process

// type node then enter
// type process (bunch of information that node.js running);
// also see argv, argv: [ '/home/himansu/.nvm/versions/node/v18.20.4/bin/node' ],
// run process.argv

// What is process?
// it is a global that provides info about and control over current node.js process

// process.argv - see and read in node.js process.argv
