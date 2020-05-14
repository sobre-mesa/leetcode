// https://leetcode.com/problems/roman-to-integer/
let pre = {
  "I": ["V", "X"],
  "X": ["L", "C"],
  "C": ["D", "M"]
}
var romanToInt = function (s) {
  let v = s.split("");
  let val = x => ({
    "I": 1,
    "V": 5,
    "X": 10,
    "L": 50,
    "C": 100,
    "D": 500,
    "M": 1000
  }[x]);

  let convert = (i, coll) => {
    let rn = v[i];
    let n = val(rn);
    if (i == v.length - 1) return coll + n;
    if (rn in pre) {
      let next = v[i + 1];
      if (pre[rn].includes(next)) {
        if (i == v.length - 2) return coll + (val(next) - n)
        return convert(i + 2, coll + (val(next) - n));
      }
      else {
        return convert(i + 1, coll + n);
      }
    } else {
      return convert(i + 1, coll + n);
    }
  }
  return convert(0, 0);
};