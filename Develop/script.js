// Assignment Code
var generateBtn = document.querySelector("#generate");

// Array of selected password criteria
var selectedCriteria = [];



// Function for selecting password length criteria
var getLength = function() {
    while (true) {
        var length = (window.prompt("How many characters would you like the password to be?\n\nMust be at least 8 characters and no more than 128 characters."));

        var passwordLength = number(length);

            if (isNaN(passwordLength) || passwordLength < 8 || passwordLength > 128) {
                window.alert("Password must be at least 8 characters and no more than 128 characters. Please try again.");
            } else {
                criteria.push(passwordLength);
                return passwordLength;
            }
    }
}



var getCharType = function() {
}



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



});
