/* 
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/ClientSide/javascript.js to edit this template
 */


// PasswordGenerator class
class PasswordGenerator {
  constructor() {
    this.selections = {
      length: 8,
      lowercase: false,
      uppercase: false,
      numeric: false,
      special: false
    };

    this.lowercaseCharacters = "abcdefghijklmnopqrstuvwxyz";
    this.uppercaseCharacters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    this.numericCharacters = "0123456789";
    this.specialCharacters = "!@#$%^&*()-_+=";
  }

  // Initialize options for password length dropdown
  initLengthOptions() {
    const lengthSelect = document.querySelector("#length");
    for (let i = 8; i < 129; i++) {
      const option = new Option(i, i);
      lengthSelect.add(option);
    }
  }

  // Update selections based on user input
  updateSelections() {
    this.selections.length = parseInt(document.querySelector("#length").value);
    this.selections.lowercase = document.querySelector("#lowercase").checked;
    this.selections.uppercase = document.querySelector("#uppercase").checked;
    this.selections.numeric = document.querySelector("#numeric").checked;
    this.selections.special = document.querySelector("#special").checked;
  }

  // Generate password based on selections
  generatePassword() {
    let passwordCharacters = '';
    let finishedPassword = '';

    if (this.selections.lowercase) {
      passwordCharacters += this.lowercaseCharacters;
    }
    if (this.selections.uppercase) {
      passwordCharacters += this.uppercaseCharacters;
    }
    if (this.selections.numeric) {
      passwordCharacters += this.numericCharacters;
    }
    if (this.selections.special) {
      passwordCharacters += this.specialCharacters;
    }

    if (!passwordCharacters) {
      alert("Please select at least 1 type of character to include in your password");
      return '';
    }

    for (let i = 0; i < this.selections.length; i++) {
      finishedPassword += passwordCharacters.charAt(Math.floor(Math.random() * passwordCharacters.length));
    }

    return finishedPassword;
  }
}

// Initialize PasswordGenerator
const passwordGenerator = new PasswordGenerator();

// Event listener for Generate Password button
document.querySelector("#generate").addEventListener("click", () => {
  passwordGenerator.updateSelections();
  const password = passwordGenerator.generatePassword();
  document.querySelector("#password").value = password;
});

// Initialize length options
passwordGenerator.initLengthOptions();
