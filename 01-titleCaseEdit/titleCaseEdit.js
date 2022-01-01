function titleCaseEdit(title) {
  const words = title.split(" ");
  title = "";
  
  for(let i = 0; i < words.length; i++){
    /*This sets the first letter in each word in the array to upper case*/
    words[i] = words[i].replace(words[i].charAt(0), words[i].charAt(0).toUpperCase());

    title = title.concat(words[i] + " "); // Adds the words back together to make the sentence again. 
  }// End of the for loop

  return title.trim();

}// End of the titleCaseEdit function 

// Do not edit this line;
module.exports = titleCaseEdit;