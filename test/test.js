var ps = require('../'),
    t = require("tap");

t.test('trucation', function (t) {
  t.equal(
    ps.truncateToWord('hello world, this is the last word '),
    'hello world, this is the last word');
  t.equal(
    ps.truncateToWord('hello world, this is the last wo'),
    'hello world, this is the last');
  t.equal(
    ps.truncateToWord('hello world, this is the'),
    'hello world, this is');
  t.end();
});

t.test('splitAtLength', function (t) {
  var original, res;

  original = 'hello world, this is the last word ';
  res = ps.splitAtLength(original, 15);
  t.ok(res.string.length <= 15);
  t.equal(res.string + res.remaining, original);

  original = 'a longer post with #hashtags and @mentions in important places';
  res = ps.splitAtLength(original, 15);
  t.ok(res.string.length <= 15);
  t.equal(res.string + res.remaining, original);

  original = 'hello world, this is the last word ';
  res = ps.splitAtLength(original, 15);
  t.ok(res.string.length <= 15);
  t.equal(res.string + res.remaining, original);
  t.end();
});

t.test('segment', function (t) {
  var original, res, length;

  original = 'a longer post with #hashtags and @mentions in important places';
  res = ps.segment(original, 15);
  t.ok(res.length >= 3);
  lengths = res.map(function (segment) { return segment.length; });
  t.ok(Math.max.apply(Math, length) <= 15);

  original = 'an even longer post with #hashtags and @mentions in important places, as well as http://phuu.net links and – some – nice – punctuation there lads.';
  res = ps.segment(original, 50);
  t.ok(res.length >= 2);
  lengths = res.map(function (segment) { return segment.length; });
  t.ok(Math.max.apply(Math, length) <= 15);

  t.end();
});