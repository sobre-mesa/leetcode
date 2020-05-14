https://leetcode.com/articles/add-two-numbers/
var addTwoNumbers = function (l1, l2) {
  let a = 0;
  let len = l1.length;
  console.log(l1)
  console.log(l2)
  for (let i = 0; i < len; i++) {
    let x = len - i - 1;
    let p = Math.pow(10, (x));
    let y = l1[x] * p;
    a += y;
  }
  let b = 0;
  len = l2.length;
  for (let i = 0; i < len; i++) {
    let x = len - i - 1;
    let p = Math.pow(10, (x));
    let y = l2[x] * p;
    b += y;
  }
  let c = (a + b) + "";
  let r = c.split("");
  r = r.reverse();
  r = r.map(x => parseInt(x))
  return r;
};