/**
Take 30 minutes to work on this assignment. Make sure to ask for help if you get stuck. If you need more than 30 minutes, we will have time on Friday. 

Read through the function and write comments to explain what is happening in the code.

 1. How would we change this to find the shortest word?
 2. How would you display the actual word in the console?
 */

// Define a function named findLongestWord that takes a string 'str' as a parameter.

function findLongestWord(str) {
  // this will split the string into separate words and  create an array
  var words = str.split(" ");
  console.log(words, "words");
  // Initialize a variable 'longestWordLength' to keep track of the length of the longest word.
  var longestWordLength = 0;
  console.log(longestWordLength, "longestWordLength");
  //this is going to loop threw the word to get every part of the longest word
  for (var i = 0; i < words.length; i++) {
    //Check if the length of the current word is greater than the current 'longestWordLength'.
    if (words[i].length > longestWordLength) {
      // update 'longestWordLength' with the length of the current word.
      longestWordLength = words[i].length;
      console.log(longestWordLength, "updatedLongestWordLength");
    }
  }

  return longestWordLength;
}
//display the word in the console
findLongestWord("This is a sample string");
