// Assignment code here

// Function to generate a random password
function generatePassword() {
    // Prompt for password length
    var passwordLength = prompt("Enter password length between 8 and 128 characters:");

    // Validate input for password length
    if (passwordLength < 8 || passwordLength > 128 || isNaN(passwordLength)) {
        alert("Please enter a valid password length between 8 and 128 characters.");
        return;
    }

    // Prompt for character types
    var includeLowercase = confirm("Include lowercase characters?");
    var includeUppercase = confirm("Include uppercase characters?");
    var includeNumeric = confirm("Include numeric characters?");
    var includeSpecial = confirm("Include special characters?");

    // Validate input for character types
    if (!(includeLowercase || includeUppercase || includeNumeric || includeSpecial)) {
        alert("Please select at least one character type.");
        return;
    }

    // Define character sets
    var lowercaseChars = "abcdefghijklmnopqrstuvwxyz";
    var uppercaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    var numericChars = "0123456789";
    var specialChars = "!@#$%^&*()-_=+[]{}|;:'\",.<>/?";

    // Combine selected character sets
    var allChars = "";
    if (includeLowercase) allChars += lowercaseChars;
    if (includeUppercase) allChars += uppercaseChars;
    if (includeNumeric) allChars += numericChars;
    if (includeSpecial) allChars += specialChars;

    // Generate password
    var password = "";
    for (var i = 0; i < passwordLength; i++) {
        var randomIndex = Math.floor(Math.random() * allChars.length);
        password += allChars.charAt(randomIndex);
    }

    // Display password in alert
    alert("Your generated password is: " + password);
}

// Event listener for button click
// document.getElementById("generateBtn").addEventListener("click", generatePassword);

// This is the starter code provided by the assignment
// Assignment code here


/*
// Get references to the #generate element
var generateBtn = document.querySelector("#generate");
var length = i > 8 && i < 128 && i !== NaN;
var upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var lowerCase = "abcdefghijklmnopqrstuvwxyz";
var number = "0123456789";
var symbol = "!@#$%^&*()_+~`|}{[]:;?><,./-=";

const allChars = upperCase + lowerCase + number + symbol;

function writePassword() {
    let password = "";
    password += upperCase[Math.floor(Math.random() * upperCase.length)];
    password += lowerCase[Math.floor(Math.random() * lowerCase.length)];
    password += number[Math.floor(Math.random() * number.length)];
    password += symbol[Math.floor(Math.random() * symbol.length)];

    while(length > password.length) {
        password += allChars[Math.floor(Math.random() * allChars.length)];
    }

    generateBtn.value = password;
}
*/
