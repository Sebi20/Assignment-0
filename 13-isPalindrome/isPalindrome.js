function isPalindrome(word) {
  if(word.charAt(0) !== word.charAt(word.length - 1)){
    return false;
  }
  if(word.length === 0 || word.length === 1){
    return true;
  }

  return isPalindrome(word.substring(1, word.length - 1));
}

// Do not edit this line;
module.exports = isPalindrome;