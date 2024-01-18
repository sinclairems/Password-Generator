// Assignment code here

// Function to generate a random password
function generatePassword() {
    // Prompt for password length
    var passwordLength = prompt("How long would you like your password? Type a number between 8 and 128 characters:");

    // Validate input for password length
    if (passwordLength < 8 || passwordLength > 128 || isNaN(passwordLength)) {
        alert("Please enter a valid password length between 8 and 128 characters.");
        return;
    }

    // Prompts
    var includeLowercase = confirm("Would you like to include lowercase characters?");
    var includeUppercase = confirm("Would you like to include uppercase characters?");
    var includeNumber = confirm("Would you like to include numeric characters?");
    var includeSpecial = confirm("Would you like to include special characters?");

    // Validate input 
    if (!(includeLowercase || includeUppercase || includeNumber || includeSpecial)) {
        alert("Please select at least one character type.");
        return;
    }

    // Character sets
    var lowercase = "abcdefghijklmnopqrstuvwxyz";
    var uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    var number = "0123456789";
    var special = "!@#$%^&*()-_=+[]{}|;:'\",.<>/?";

    // Combine character sets
    var allChars = "";
    if (includeLowercase) allChars += lowercase;
    if (includeUppercase) allChars += uppercase;
    if (includeNumber) allChars += number;
    if (includeSpecial) allChars += special;

    // Generate password
    var password = "";
    for (var i = 0; i < passwordLength; i++) {
        var randomIndex = Math.floor(Math.random() * allChars.length);
        password += allChars.charAt(randomIndex);
    }

    // Display password in alert
    alert("Your password is: " + password);
}

// Given code:
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

