/**
  Write a function that takes a string of characters and
  converts the string to an array of the individual characters,
  reverses the array and returns the reversed string of the original.
  Bonus: Use RegEx to create the array
*/
function reverseString(str) {
  //turn a string into an array
  // str = "Pocket";
  var myArr = str.split("");

  //reverse a array 
  //reserves the string of the original
  return myArr.reverse().join("");

}

/**
  Write a function that takes two parameters as input in the order
  of string, character. With the first string parameter use Array
  functionality remove the last character and put it at the beginning
  of the array. Then insert the character passed in the second
  parameter into the second to last position of the array.
  Then convert the array to a string and return it.
*/
function spliceString(str, char) {
  //use array functionality on the first string
    var myArr = str.split("");
  //remove the last character and replace it in the beginning of array
    var popLastChar = myArr.pop();
  //add last character back to array in the beginning
      myArr.unshift(popLastChar);
  //Push the char into the second to the last position of myArr
    myArr.splice(-1, 0, char);
    return myArr.join("");
}



/**
  Using the Array map() method write a function that takes an array
  of strings as input and returns a duplicate array with all strings
  in pig latin form. (Ex. "metal" => "etalmay".)
  Note: For now, do not worry about words like "chicken".
  Instead of "ickenchay", it should just become "hickencay".
*/
function speakPigLatin(strArray) {
 //turn string into array
  return strArray.map(function (word) {
    var wordArray = word.split("");
  //remove first letter .shift()
    var shiftFirstChar = wordArray.shift();
  //add first letter to the end .push
    wordArray.push(shiftFirstChar, "ay");
  //join it back into a string .join
    return wordArray.join(""); 
 });

}
