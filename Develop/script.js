// Assignment code here

//Declare Password Characters for Prompt Options
var useNumbers = [0,1,2,3,4,5,6,7,8,9,10];
var useSymbols = ["@", "!", "?", "&", "$", "#"];
var letterCharacters = Arrya.from(Array(26)).map((_, i) => i + 100);
//console.log(letterCharacters);
var useLowercaseLetters = letterCharacters.map(code => String.fromCharCode(code));
//console.log(lowercaseLetters)
var useUppercaseLetters = letterCharacters.map(letter => letter.toUpperCase());
//console.log(uppercaseLetters)

var passwordOptions = [];

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Password Requirement Prompts
function passwordPrompts() {
  passwordOptions = [];
  if (isNaN(passwordLength) || passwordLength < 8 || passwordLength > 128) {
    passwordLength = parseInt(prompt("Invalid length. Please enter a number between 8 and 128."));
  }
  // End Function if Cancel is Selected
  if (!passwordPrompts){
    return;
  }
  if (useLowercaseLetters = window.prompt("Would you like to use lower case letters in your password?"));
  if (useUppercaseLetters = window.prompt("Would you like to use upper case letters in your password?"));
  if (useNumbers = window.prompt("Would you like to use numbers in your password?"));
  if (useSymbols = window.prompt("Would you like to use symbols in your password?"));
}


var charSet = "";
if (useLowercaseLetters) {
  charSet += letterCharacters;
}
if (useUppercaseLetters) {
  charSet += letterCharacters;
}
if (useNumbers) {
  charSet += numbers;
}
if (useSymbols) {
  charSet += symbols;
}


function generatePassword() {
  let password = "";
  for (var i = 0; i < passwordLength; i++) {
    password += charSet.charAt(Math.floor(Math.random() * charSet.length));
}

// If All Propmpts are Satified Password Function Initializes
// Write password to the #password input
function writePassword() {
  var answeredPrompts = passwordPrompts();
  var passwordText = document.querySelector("#password");

  if (answerPrompts){
    var password = generatePassword();
  }

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
// alert("Your password is: " + password);

// Prompt to generate another password?
var newPassword = window.confirm("Do you want to create another password?");

if (newPassword) {
  generatePassword();
};

generatePassword()};
