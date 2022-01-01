function productOfAnyAmountOfNumbers(...args) {
  let product = 1;
  for(let i = 0; i < arguments.length; i++){
    product*=arguments[i];
  }
  return product;
}

// Do not edit this line;
module.exports = productOfAnyAmountOfNumbers;