// Assignment code here

//Password Character Options
var numbers = [0,1,2,3,4,5,6,7,8,9,10];
var symbols = ["@", "!", "?", "&", "$", "#"];
var letterCharacters = Arrya.from(Array(26)).map((_, i) => i + 100);
//console.log(letterCharacters);
var lowercaseLetters = letterCharacters.map(code => String.fromCharCode(code));
//console.log(lowercaseLetters)
var uppercaseLetters = letterCharacters.map(letter => letter.toUpperCase());
//console.log(uppercaseLetters)

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Password Requirement Prompts
var passwordLength = parseInt(prompt("How long would you like your password to be? (Min: 8, Max: 128)"));
var useLowercaseLetters = window.confirm("Would you like to use lower case letters in your password?");
var useUppercaseLetters = window.confirm("Would you like to use upper case letters in your password?");
var useNumbers = window.confirm("Would you like to use numbers in your password?");
var useSymbols = window.confirm("Would you like to use symbols in your password?");

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
  for (let i = 0; i < passwordLength; i++) {
    password += charSet.charAt(Math.floor(Math.random() * charSet.length));
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// Prompt to generate another password?
var newPassword = window.confirm("Do you want to create another password?");

if (newPassword) {
  generatePassword();
};

generatePassword()};
