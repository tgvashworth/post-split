# post-split

Split a post (status, tweet) up into human-readable segments that fit inside a specific length.

## Usage

The following assumes this:

```javascript
var ps = require('post-split');

var post = 'Hello world, this is a long post that I wish to be split into many sub-posts. It\'s long, which is useful becuse it needs to be. Longer and longer it goes. Yes.';
```

Extract segments from a post:

```javascript
var segments = ps.segment(post, 50);

/*
segments =
[ 'Hello world, this is a long post that I wish to',
  ' be split into many sub-posts. It\'s long, which',
  ' is useful becuse it needs to be. Longer and',
  ' longer it goes. Yesh.' ]
 */
```

With a longer segment length:

```javascript
 var segments = ps.segment(post, 70);

 /*
 segments =
[ 'Hello world, this is a long post that I wish to be split into many',
  ' sub-posts. It\'s long, which is useful becuse it needs to be. Longer',
  ' and longer it goes. Yesh.' ]
```

## Install

`npm install post-split`

## License

MIT