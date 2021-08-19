// Assignment code here
var generateBtn = document.querySelector('#generate');
// Arrays
var num = "0123456789";
var upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var lower = "abcdefghijklmnopqrstuvwxyz";
var special = "!#$%&\()*+,-./:;<=>?@^[\\]^_`{|}~";

var number = num.split("");
var abcLower = lower.split("");
var abcUpper = upper.split("");
var specialChar = special.split("");

// function to gather password options



//Generate Password
function generatePassword() {



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



// WHEN all prompts are answered
// THEN a password is generated that matches the selected criteria

// WHEN the password is generated
// THEN the password is either displayed in an alert or written to the page