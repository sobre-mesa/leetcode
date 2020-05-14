// https://leetcode.com/articles/reverse-integer/
var reverse = function (x) {
  let y = x + "";
  let s = y.split("")
  const max = Math.pow(2, 31);
  let n = x => {
    let p = parseInt(x);
    if (p > max - 1) {
      return 0;
    }
    return p;
  };
  if (s[0] == "-") {
    s.shift();
    n = x => {
      let p = 0 - parseInt(x);
      if (p < 0 - max) {
        return 0
      }
      return p;
    };
  }
  s.reverse();
  return n(s.join(""));
};