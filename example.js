var ps = require('./');

console.log('"%s"', ps.truncateToWord('hello world, this is the last word '));
console.log('"%s"', ps.truncateToWord('hello world, this is the last wo'));
console.log('"%s"', ps.truncateToWord('hello world, this is fab'));


console.log();
var post = 'Hello world, this is a long post that I wish to be split into many sub-posts. It\'s long, which is useful becuse it needs to be. Longer and longer it goes. Yesh.';
console.log(ps.splitAtLength(post, 40));
console.log();
console.log(ps.segments(post, 70));