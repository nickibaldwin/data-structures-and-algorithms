'use strict';

//-------------CHALLENGE 1-------------

var twoSum = function(nums, target) {
  const map = {};
  for(var i = 0; i < nums.length; i++){
    var num2 = target - nums[i];
    if(num2 in map){
      return [map[num2], i];
    }
    else{
      map[nums[i]] = i;
    }
  }
};

//Runtime: 64 ms, faster than 99.56% of JavaScript online submissions for Two Sum.
//Memory Usage: 40.5 MB, less than 31.14% of JavaScript online submissions for Two Sum.

