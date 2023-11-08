/**
Take 30 minutes to work on this assignment. Make sure to ask for help if you get stuck. If you need more than 30 minutes, we will have time on Friday. 

Read through the function and write comments to explain what is happening in the code.

 1. How would we change this to find the shortest word?
 2. How would you display the actual word in the console?
 */

// Define a function named findLongestWord that takes a string 'str' as a parameter.

function findLongestWord(str) {
  // Split the input string into separate words and create an array.
  var words = str.split(" ");
// Initialize a variable 'shortestWord' to keep track of the shortest word.
  var longestWord = words[0]; // Initialize with the first word.
// Iterate through the array of words.
  for (var i = 1; i < words.length; i++) {
     // Check if the length of the current word is shorter than the length of 'shortestWord'.
    if (words[i].length > longestWord.length) {
      // Update 'shortestWord' with the current word if it's shorter.
      longestWord = words[i];
    }
  }

  return longestWord;
}

var longestWord = findLongestWord("This is a sample sentence to see which word is the longest.");
console.log("The longest word in the sentence is: ", longestWord);



// 1. How would we change this to find the shortest word?
// Display the longest word in the console.

function findShortestWord(str) {
  // Split the input string into separate words and create an array.
  var words = str.split(" ");
  
  // Initialize a variable 'shortestWord' to keep track of the shortest word.
  var shortestWord = words[0]; // Initialize it with the first word in the array.

  // Iterate through the array of words.
  for (var i = 1; i < words.length; i++) {
    // Check if the length of the current word is shorter than the length of 'shortestWord'.
    if (words[i].length < shortestWord.length) {
      // Update 'shortestWord' with the current word if it's shorter.
      shortestWord = words[i];
    }
  }

  // Return the shortest word found in the input string.
  return shortestWord;
}

// Call the findShortestWord function with the input string.
var shortestWord = findShortestWord("This is a sample sentence to see which word is the shortest.");
console.log("The shortest word in the sentence is: ", shortestWord);

 