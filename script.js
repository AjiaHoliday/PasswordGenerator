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
function definePassword() {
  var isValid = false;
  do {
    var confirmLength = prompt("Choose your password length between 8 and 128 characters.");
      if (confirmLength<=7 || confirmLength >=129 || isNaN(confirmLength)){
      alert("Must choose a number between 8 and 128.\nTry again!");
      return definePassword();
    }

    var confirmLowercase = confirm("Do you want your password to include lowercase characters?");
    var confirmUppercase = confirm("Do you want your passwords to include uppercase characters?");
    var confirmNumbers = confirm("Do you want your paswords to include numbers?");
    var confirmSpecialChar = confirm("Do you want your passwords to include special characters?");

    window.alert("Your password options:\nNumber of characters: "+confirmLength
    +"\nInclude lowercase: "+confirmLowercase
    +"\nInclude uppercase: "+confirmUppercase
    +"\nInclude numbers: "+confirmNumbers
    +"\nInclude special characters: "+confirmSpecialChar)

    var passwordParameters = {
      passLength: confirmLength,
      cLowercase: confirmLowercase,
      cUppercase: confirmUppercase,
      numbers: confirmNumbers,
      specialChar: confirmSpecialChar
    }
    if (
      !confirmLowercase &&
      !confirmUppercase &&
      !confirmNumbers &&
      !confirmSpecialChar ){
        alert ("Must choose at least one character type!\nPlease start over.")
      } else {
          isValid = true;
      }
    }
    while(!isValid);
    return passwordParameters;
}


//Generate Password
function generatePassword() {
  window.alert("Let's get you a password!")

  var passwordDefinition = definePassword();
  var passwordArray = [];
  var finalPassword = "";
  


  if (passwordDefinition.cLowercase) {
    for (var i of abcLower){
      passwordArray.push(i);
    }
  }
  if (passwordDefinition.cUppercase) {
    for (var i of abcUpper){
      passwordArray.push(i);
    }
  }
  if (passwordDefinition.numbers) {
    for (var i of number){
      passwordArray.push(i);
    }
  }
  if (passwordDefinition.specialChar) {
    for (var i of specialChar){
      passwordArray.push(i);
    }
  }
  console.log(passwordArray);

  for (var i =0; i< passwordDefinition.passLength; i++){
    finalPassword += passwordArray[Math.floor(Math.random() * passwordArray.length)];
  }
  console.log(finalPassword);
  return finalPassword;
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

