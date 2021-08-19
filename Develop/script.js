// Assignment code here
// Arrays
var num = "0123456789";
var number = num.split("");
var upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var abcUpper = upper.split("");
var lower = "abcdefghijklmnopqrstuvwxyz";
var abcLower = lower.split("");
var special = "!#$%&\()*+,-./:;<=>?@^[\\]^_`{|}~";
var specialChar = special.split("");

// variable declarations
var confirmLength = "";
var confirmSpecialCharacter;
var confirmNumbers;
var confirmUpperCase;
var confirmLowerCase;

//Generate Password
function generatePassword() {
window.alert("I'm happy to help you generate a new password, I just have a few questions to get you the perfect password for your needs!");

// WHEN prompted for the length of the password
// THEN I choose a length of at least 8 characters and no more than 128 characters
var confirmLength = prompt("How many characters (between 8-128) would you like your password to contain?");

  if(confirmLength <= 7 || confirmLength >= 129 || isNaN(confirmLength)){
    alert("Password length must be a number between 8-128 characters\nTRY AGAIN");
  }
  alert('Your password will have '+confirmLength+ ' characters.');
// WHEN asked for character types to include in the password
// THEN I confirm whether or not to include lowercase, uppercase, numeric, and/or special characters
function parameters() {
var confirmLowerCase = confirm("Click OK to confirm if you would like to include lowercase characters in your password.");
var confirmUpperCase = confirm("Click OK to confirm if you would like to include uppercase characters in your password.");
var confirmNumbers = confirm("Click OK to confirm if you would like to include numbers in your password.");
var confirmSpecialCharacter = confirm("Click OK to confirm if you would like to include special characters in your password.");

while(confirmLowerCase === false && 
  confirmUpperCase === false && 
  confirmSpecialCharacter === false && 
  confirmNumbers === false) {
    alert("You must choose at least one parameter!");
}
parameters()

  
    }








}


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);



// WHEN I click the button to generate a password
// THEN I am presented with a series of prompts for password criteria

// WHEN prompted for password criteria
// THEN I select which criteria to include in the password



// WHEN I answer each prompt
// THEN my input should be validated and at least one character type should be selected

// WHEN all prompts are answered
// THEN a password is generated that matches the selected criteria

// WHEN the password is generated
// THEN the password is either displayed in an alert or written to the page