function fizzBuzz(start, end) {
  const arr = [];
  
  let i = 0;
  
  for(let n = start; n <= end; n++){
    if(n % 5 == 0 && n % 3 == 0){
      arr[i] = "FizzBuzz";
    }else if(n % 5 == 0){
      arr[i] = "Buzz";
    }else if(n % 3 == 0){
      arr[i] = "Fizz";
    }else {
      arr[i] = n;
    }
    i++;
  }

  return arr;
}

// Do not edit this line;
module.exports = fizzBuzz;