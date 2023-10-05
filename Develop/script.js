// Assignment Code
var generateBtn = document.querySelector("#generate");
var rerollBtn = document.querySelector("#reroll");



var getLength = function() {

    while (true) {

        var length = (window.prompt("How many characters would you like the password to be?\n\nMust be at least 8 characters and no more than 128 characters."));

        if (!length) {
            window.exit();
        }

        var passwordLength = Number(length);

        if (isNaN(passwordLength) || passwordLength < 8 || passwordLength > 128) {
            window.alert("Password must be at least 8 characters and no more than 128 characters. Please try again.");
        } else {
            break;
        }
    }

    return passwordLength;
};



var getCharTypes = function() {

    var validCharTypes = ["lowercase", "uppercase", "numbers", "special"];

    while (true) {

        var charTypes = window.prompt("Select at least one of the following character types for the password:\n\n   lowercase\n   uppercase\n   numbers\n   special\n\nPlease separate choices with a comma.");

        if (!charTypes) {
            window.exit();
        }

        var normalizedCharTypes = charTypes.toLowerCase();
        var choices = normalizedCharTypes.split(",");
        var passwordCharTypes = choices.map(c => c.trim());

        if (!passwordCharTypes.some(type => validCharTypes.includes(type))) {
            window.alert("Password must contain at least one character type. Please try again.");
        } else {
            break;
        }
    }

    return passwordCharTypes;
};



// Function to generate password
var generatePassword = function() {

    var passwordLength = getLength();
    var passwordCharTypes = getCharTypes();

    var lowercase = "abcdefghijklmnopqrstuvwxyz";
    var uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    var numbers = "0123456789";
    var special = " !\"#$%&'()*+,-./:;<=>?@[\]^_`{|}~";

    var password = "";
    var char = "";

    var getRandomChar = (chars) => {
        return chars[Math.floor(Math.random() * chars.length)];
    }

    // Generate password
    for (let i = 0; i < passwordLength; i++) {

        // Get random character type
        var randomPasswordCharType = passwordCharTypes[Math.floor(Math.random() * passwordCharTypes.length)];

        // Get random character for type
        switch (randomPasswordCharType) {
            case 'lowercase':
                char = getRandomChar(lowercase);
                break;
            case 'uppercase':
                char = getRandomChar(uppercase);
                break;
            case 'numbers':
                char = getRandomChar(numbers);
                break;
            case 'special':
                char = getRandomChar(special);
                break;
        }

        // Add to password
        password += char;

    }

    return password;
};



// Write password to the #password input
function writePassword() {

    window.alert("To create a password, please answer the following prompts.");

    var password = generatePassword();
    var passwordText = document.querySelector("#password");

    passwordText.value = password;

};



// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
