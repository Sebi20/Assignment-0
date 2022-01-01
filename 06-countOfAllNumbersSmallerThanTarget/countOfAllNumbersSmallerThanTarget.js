function countOfAllNumbersSmallerThanTarget(nums, target) {
  let cnt = 0;

  for(let i = 0; i < nums.length; i++){
    if(nums[i] < target){
      cnt++;
    }
  }
  return cnt;
}

// Do not edit this line;
module.exports = countOfAllNumbersSmallerThanTarget;