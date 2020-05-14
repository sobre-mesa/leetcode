// https://leetcode.com/articles/palindrome-number/
var isPalindrome = function (x) {
    if (x < 0) return false;
    if (x.length < 2) return true;
    let s = x + "";
    s = s.split("");
    let len = s.length;
    let i = len / 2;
    let left = s.slice(0, i);
    let right = s.slice(len % 2 == 0 ? i : i + 1, len);
    for (let i = 0; i < left.length; i++) {
        let a = left[i];
        let b = right[right.length - i - 1];
        console.log(a, b);
        if (a != b) return false
    }
    return true;
};