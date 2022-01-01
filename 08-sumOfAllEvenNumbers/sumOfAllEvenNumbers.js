function sumOfAllEvenNumbers(nums) {
  let cnt = 0;
  for(let i = 0; i < nums.length; i++){
    if(nums[i] % 2 === 0){
      cnt++;
    }
  }

  return cnt;
}

// Do not edit this line;
module.exports = sumOfAllEvenNumbers;