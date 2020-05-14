// https://leetcode.com/articles/two-sum/

var twoSum = function (nums, target) {
  let map = {};
  for (let i = 0; i < nums.length; i++) {
    map[nums[i]] = i;
  }
  for (let i = 0; i < nums.length; i++) {
    let complement = target - nums[i];
    console.log(map[complement])
    if (map[complement] != null && map[complement] != i) {
      return [i, map[complement]];
    }
  }
};