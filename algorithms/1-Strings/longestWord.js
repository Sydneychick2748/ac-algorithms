/**
 Read through the function and write comments to explain what is happening in the code.

 1. How would we change this to find the shortest word?
 2. How would you display the actual word in the console?
 */

function findLongestWord(str) {
  var words = str.split(' ');
  var longestWordLength = 0;
  
  for (var i = 0; i < words.length; i++) {
    if (words[i].length > longestWordLength) {
      longestWordLength = words[i].length;
    }
  }
  
  return longestWordLength;
}

