//This code will ask for a string
//Then it will tell you the number of:
//number, letters, punctuation, spaces, and word



//sort given string using the charCodeAt value to find
//number, letter, punctuation, space, and word count
//input of var value
//outputs by editing numberOf____ variables
function sortByCode(){
  
  //runs for every character and finds number of:
  //number, letters, punctuation, spaces, and word
  for(var i = 0; i < value.length; i++){
  
    var codeAt = value.charCodeAt(i);

    //is it a number
    if (codeAt >= 48 && codeAt <= 57){

      numberOfNumbers += 1;

    //is it a Capital letter
    }else if (codeAt >= 65 && codeAt <= 90){

      numberOfLetters += 1;

    //is it a lower case letter
    }else if (codeAt >= 97 && codeAt <= 122){

      numberOfLetters += 1;

    //is it a ! or . or ?
    }else if (codeAt === 33 || codeAt === 46 || codeAt === 63){

      numberOfPunctuation += 1;

    //is it a space
    }else if (codeAt === 32){

      numberOfSpaces += 1;
      
      //find number of words
      //asks if the last variable was a space or if it is the first variable
      if (value.charCodeAt(i-1) !== 32 && i !== 0){
        
        numberOfWords += 1;
        
      }

  }
  
  //debug - prints numbers of each character
  //document.write(codeAt + ", ");
}
}




//keeps asking for string till they enter a string
do{
  
  var value = prompt("Please type a string?");

}while(typeof(value) !== "string" || value.length <= 0 || value === null);



//sort code by number of ___
var numberOfNumbers = 0;
var numberOfLetters = 0;
var numberOfPunctuation = 0;
var numberOfSpaces = 0;
var numberOfWords = 1;

sortByCode();


//outputs the string and its sorted values
document.write("<p>The string is: " + value);
document.write("<p>This string has " + numberOfNumbers + " Numbers.");
document.write("<p>This string has " + numberOfLetters + " Letters.");
document.write("<p>This string has " + numberOfPunctuation + " Punctuation.");
document.write("<p>This string has " + numberOfSpaces + " Spaces.");
document.write("<p>This string has " + numberOfWords + " Words.");
