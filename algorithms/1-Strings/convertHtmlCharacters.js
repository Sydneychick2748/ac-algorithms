/**
1. Read through the function and write comments to explain what is happening in the code.
2. What are the inputs for this function? 
3. What is the expected output?
4. How would we change this to add all of the numbers?
5. Change the function so that all lowercase a's turn to uppercase A's.
 */

// pass in a string that includes one of the following symbols: &, <, >, "", or '


// this is a function that takes a parameter 
function convertHTML(str) {
  // setting a variable to an empty string 
  let convertedString = "";
// using a for loop to loop threw the parameter in the function to find each character in the parameter str
  for (let i = 0; i < str.length; i++) {
    // setting a variable to the  current character at index 'i'
    let char = str[i];
    // using a if statement to see if the variable that we made equal to the index of each charter truly equal "&"
    if (char === '&') {
      // if it is equal to "&" then add &amp;'to the new empty string and now the  variable convertedString  is now '&amp;
      convertedString += '&amp;';
      // Check if the character is a less-than sign ('<')
    } else if (char === '<') {
      // If it is, replace it with the HTML entity for a greater-than sign ('&lt;';)
      convertedString += '&lt;';
      // Check if the character is a greater-than sign ('>')
    } else if (char === '>') {
       // If it is, replace it with the HTML entity for a greater-than sign ('&gt;')
      convertedString += '&gt;';
 // Check if the character is a double quote ('"')
    } else if (char === '"') {
       // If it is, replace it with the HTML entity for a double quote ('&quot;')
      convertedString += '&quot;';
      // Check if the character is a single quote (apostrophe) ("'")
    } else if (char === "'") {
      // If it is, replace it with the HTML entity for a single quote ('&apos;')
      convertedString += '&apos;';
      // If the character is none of the special characters above
    } else {
      convertedString += char;
    }
  }
// Return the final converted string with HTML entities replaced
  return convertedString;
}