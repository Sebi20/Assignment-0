function sumOfNumsWithinARange(nums, start, end) {
  let cnt = 0;
  //if the start number is not in the array then 0 is returned
  if(nums.indexOf(start) === -1){
    return 0;
  }else {
    for(let i = nums.indexOf(start); i <= nums.length; i++){
      if(nums[i] <= end){ 
        cnt++;
      }// End of the if statement
    }// End of the for loop
  }
  return cnt;
}

// Do not edit this line;
module.exports = sumOfNumsWithinARange;