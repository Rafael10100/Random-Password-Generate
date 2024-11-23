const passwordBox = document.getElementById("passwoard");
const lenght = 12;
const upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowerCase = "abcdefghijklmnopqrstuvwxyz";
const number = "0123456789";
const symbol = "!@#$%^&*()_+";

const allChar = upperCase + lowerCase + number + symbol;

function generatePassword(){
  let password = "";
  for(let i=0; i<=lenght; i++){
    let randomNumber = Math.floor(Math.random() * allChar.length);
    password += allChar[randomNumber];
  }
  passwordBox.value = password;
}
function copyPassword(){
    passwordBox.select();
    navigator.clipboard.writeText(passwordBox.value);
}
