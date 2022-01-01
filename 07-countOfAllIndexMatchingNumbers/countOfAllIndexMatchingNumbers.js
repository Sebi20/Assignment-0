function countOfAllIndexMatchingNumbers(nums) {
  let cnt = 0;

  for(let i = 0; i < nums.length; i++){
    if(nums[i] === i){
      cnt++;
    }
  }

  return cnt;
}

// Do not edit this line;
module.exports = countOfAllIndexMatchingNumbers;