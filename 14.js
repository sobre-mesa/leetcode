// https://leetcode.com/articles/longest-common-prefix/

var longestCommonPrefix = function(strs) {
  if(strs.length == 0 ) return ""
  let arr = strs.map(x=>x.split(""));
  let shortest = arr.sort((x,y)=>y.length - x.length).pop();
  let coll = "";
  for(let i = 0; i < shortest.length; i++){
      let contains = true;
      arr.forEach(x=>{
          contains = contains && (x[i] == shortest[i]);
      })
      console.log(contains)
      if(!contains){
          break
      } else {
          coll = coll + shortest[i];
      }
  }
  return coll;
};