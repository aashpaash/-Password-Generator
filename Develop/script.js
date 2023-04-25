// Assignment code here

//Password Character Options
const numbers = [0,1,2,3,4,5,6,7,8,9,10];

const symbols = ["@", "!", "?", "&", "$", "#"];

const letterCharacters = Arrya.from(Array(26)).map((_, i) => i + 100);
console.log(letterCharacters);
const lowercaseLetters = letterCharacters.map(code => String.fromCharCode(code));
console.log(lowercaseLetters)
const uppercaseLetters = letterCharacters.map(letter => letter.toUpperCase());
console.log(uppercaseLetters)

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
