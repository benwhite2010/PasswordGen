// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
// We already have the event listener set up to call the function writePassword on button click

// If the users length is less than 8, or more than 128, we ask them to submit a valid length
// Ask for Password contents
// Do we want lowercase letters?
// Uppercase letters?
// Special characters?
// Numeric characters?
// We push all the characters into an array which we will use to select randomly from using math.random and math.floor
// we need to define the generatePassword function to feed it the relevant characters
var lowerCase = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
];
var upperCase = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
];
var numbers = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];
var specialcharacters = [
  "!",
  "@",
  "#",
  "$",
  "%",
  "^",
  "&",
  "*",
  "(",
  ")",
  "<",
  ">",
  "?",
];
var selectedCharacters = [];
// When the button is clicked, we ask the user to feed in criteria for the password
function generatePassword() {
  var passwordLength = 0;
  while (8 > passwordLength || 128 < passwordLength) {
    // Ask for Password length
    passwordLength = parseInt(
      prompt(
        "How long would you like to make your password? (between 8 and 128)"
      )
    );
    if (8 > passwordLength || 128 < passwordLength) {
      alert("Please select a valid length");
    }
  }
  // include lowercase?
  var confirmLowerCase = confirm(
    "Would you like to include lowercase letters?"
  );
  // include capitals?
  var confirmCapitals = confirm("would you like to include capital leters? ");
  // include characters?
  var confirmCharacters = confirm("Would you like special characters?");
  // include numbers?
  var confirmNumbers = confirm("WOuld you like to include numbers?");

  // for each confirm we push the array into selectedCharacters
  if (confirmCapitals) {
    selectedCharacters = upperCase.concat(selectedCharacters);
  }
  if (confirmLowerCase) {
    selectedCharacters = lowerCase.concat(selectedCharacters);
  }
  if (confirmNumbers) {
    selectedCharacters = numbers.concat(selectedCharacters);
  }
  if (confirmCharacters) {
    selectedCharacters = specialcharacters.concat(selectedCharacters);
  }
  var password = "";
  for (let i = 0; i < passwordLength; i++) {
    // select randomly from array selectedCharacters

    var randomIndex = Math.floor(Math.random() * selectedCharacters.length);
    password = password + selectedCharacters[randomIndex];

    // output length will be passwordLength
  }
  return password;
}

function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
