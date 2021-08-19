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
var passwordChar = [];
var paswordResult = "";

//additional functions
var confirmLength = function(){ 
  var passwordLength = window.prompt("How many characters (between 8-128) would you like your password to contain?");

  if(passwordLength <= 7 || passwordLength >= 129 || isNaN(passwordLength)){
    alert("Password length must be a number between 8-128 characters\nTRY AGAIN");
    return confirmLength();
  }
  alert('Your password will have '+passwordLength+ ' characters.')
};

var parameters = function (){
  var confirmLowerCase = confirm("Click OK to confirm if you would like to include lowercase characters in your password.")
  var confirmUpperCase = confirm("Click OK to confirm if you would like to include uppercase characters in your password.");
  var confirmNumbers = confirm("Click OK to confirm if you would like to include numbers in your password.");
  var confirmSpecialCharacter = confirm("Click OK to confirm if you would like to include special characters in your password.");

  // WHEN I answer each prompt
  // THEN my input should be validated and at least one character type should be selected
  while(
    !confirmLowerCase && 
    !confirmUpperCase && 
    !confirmNumbers &&
    !confirmSpecialCharacter) {
      alert("You must choose at least one parameter!");
      return parameters();   
    } 

    var passwordChar = '';
    passwordChar += (confirmLowerCase ? abcLower : '');
    passwordChar += (confirmUpperCase ? abcUpper : '');
    passwordChar += (confirmNumbers ? number : '');
    passwordChar += (confirmSpecialCharacter ? specialChar : '');

    console.log(passwordChar)

    alert("Your options:\nLowercase: " + confirmLowerCase 
  +"\nUppercase: " + confirmUpperCase
  +"\nInclude numbers: " + confirmNumbers
  +"\nInclude special characters: " + confirmSpecialCharacter)

};

//Generate Password
function generatePassword() {
  window.alert("I'm happy to help you generate a new password, I just have a few questions to get you the perfect password for your needs!");
  // WHEN prompted for the length of the password
  // THEN I choose a length of at least 8 characters and no more than 128 characters
  confirmLength();
  // WHEN asked for character types to include in the password
  // THEN I confirm whether or not to include lowercase, uppercase, numeric, and/or special characters
  parameters();

  var random = password(confirmLength, passwordChar);

for(var i=0; i<confirmLength; i++){
    random += passwordChar.charAt(Math.floor(Math.random()*passwordChar.length));
  };
  
  console.log(random)
  return random;
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



// WHEN all prompts are answered
// THEN a password is generated that matches the selected criteria

// WHEN the password is generated
// THEN the password is either displayed in an alert or written to the page