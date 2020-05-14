https://leetcode.com/articles/longest-substring-without-repeating-characters/

/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {
  if (s.length == 1) return 1;
  let ss = s.split("");
  let longest = 0;
  let coll = [];
  for (let x = 0; x < ss.length - 1; x++) {
    for (let i = x; i < ss.length; i++) {
      if (coll.includes(ss[i])) {
        if (coll.length > longest) {
          longest = coll.length;
        }
        coll = [ss[i]];
      } else {
        coll = [...coll, ss[i]]
        if (ss.length - 1 == i && coll.length > longest) {
          longest = coll.length;
        }
      }
    }
    coll = [];
  }
  return longest;
};