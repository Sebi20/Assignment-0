function frequencyCounter(word) {
  let obj = {};
  obj = word.split('').reduce((count, char) => {
    count[char] ? count[char]++ : count[char] = 1;
    return count;
  }, {});
  
  return obj;
}

// Do not edit this line;
module.exports = frequencyCounter;