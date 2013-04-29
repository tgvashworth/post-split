var ps = {
  /**
   * Strip out everything but that which is after the last whitespace.
   *
   * Returns a string.
   */
  truncateToWord: function (raw) {
    return (raw.match(/^(.*)\s/) || ['', raw])[1];
  },

  /**
   * Split a string at a specific length.
   *
   * Returns an object:
   *   string: the truncated string at or less that the specified length
   *   remaining: the rest of the string after the end of the truncated string
   */
  splitAtLength: function (raw, length) {
    var string = raw.slice(0, length);
    // Only truncate if the slice cut some characters off
    if (string !== raw) {
      string = ps.truncateToWord(string);
    }
    return {
      string: string,
      remaining: raw.slice(string.length)
    };
  },

  /**
   * Split a string into an array of shorter, human-readable segments.
   *
   * Returns an array.
   */
  segments: function (raw, length) {
    var segments = [],
        remaining = raw,
        result = '';
    while (remaining) {
      result = ps.splitAtLength(remaining, length);
      remaining = result.remaining;
      segments.push(result.string);
    }
    return segments;
  }
};

module.exports = ps;