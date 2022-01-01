function setUnionOfAnyAmountOfSets(...args) {
  let union = new Set();
  for(let i in arguments){
    for(let j of arguments[i]){
      union.add(j);
    }
  }

  return union;
}

// Do not edit this line;
module.exports = setUnionOfAnyAmountOfSets;