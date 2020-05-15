// https://leetcode.com/articles/valid-parentheses/

var isValid = function(s) {
  if(s.length % 2 != 0) return false;
  let open = [];
  let closes = {
       ')' : '(', 
       ']' : '[', 
       '}' : '{', 
  }
  let arr = s.split("");
  for(let i = 0; i < arr.length; i++){
      let x = arr[i];
      console.log(i)
      if(x in closes){
          let lastOpen = open.pop();
          if(closes[x] != lastOpen){
               return false;
          }
      }
      else{
          open.push(x);
      }
  }
  return open.length == 0;
};