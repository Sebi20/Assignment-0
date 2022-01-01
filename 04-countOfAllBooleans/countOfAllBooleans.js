function countOfAllBooleans(arr) {
  let cnt = 0;
  for(let i = 0; i < arr.length; i++){
    if(typeof(arr[i]) === "boolean"){
      cnt++;
    }// End of if statement
  }// End of for loop

  return cnt;
}

// Do not edit this line;
module.exports = countOfAllBooleans;