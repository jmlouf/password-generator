// Assignment Code
var generateBtn = document.querySelector("#generate");



// Function for selecting password length
var getLength = function() {
    while (true) {
        var length = (window.prompt("How many characters would you like the password to be?\n\nMust be at least 8 characters and no more than 128 characters."));
        
        var passwordLength = number(length);

        if (isNaN(passwordLength) || passwordLength < 8 || passwordLength > 128) {
            window.alert("Password must be at least 8 characters and no more than 128 characters. Please try again.");
        } else {
            return passwordLength;
        }
    }

};



// Function for selecting password character types
var getCharTypes = function() {
    while (true) {
        var charTypes = (window.prompt("Select at least one of the following character types for the password:\n\n   lowercase\n   uppercase\n   numbers\n   special\n\nPlease separate choices with a comma."));
        
        var standardizedCharTypes = charTypes.toLowerCase();
        var choices = standardizedCharTypes.split(",");
        var passwordCharTypes = choices.map(choice => choice.trim());
        
        if (passwordCharTypes !== "lowercase" && passwordCharTypes !== "uppercase" && passwordCharTypes !== "numbers" && passwordCharTypes !== "special") {
            window.alert("Password must contain at least one character type. Please try again.");
        } else {
            return passwordCharTypes;
        }
    }

};



var generatePassword = function() {
}



// Write password to the #password input
function writePassword() {
    var password = generatePassword();
    var passwordText = document.querySelector("#password");

    passwordText.value = password;

}



// Add event listener to generate button
generateBtn.addEventListener("click", function() {

    window.alert("To create a password, please answer the following prompts.");

    var passwordLength = getLength();
    var passwordCharTypes = getCharTypes();



});



/*

// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

*/