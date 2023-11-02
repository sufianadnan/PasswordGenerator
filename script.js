const passwordBox = document.getElementById("password");
const length = 12;

const upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowerCase = "abcdefghijklmnopqrstuvwxyz";
const numbers = "0123456789";
const symbols = "!@#$%^&*()-_+=[]{}|;:',.<>/?";
const allChars = upperCase + lowerCase + numbers + symbols;
function createPassword(){
    let password = "";
    password += upperCase[Math.floor(Math.random() * upperCase.length)];
    password += lowerCase[Math.floor(Math.random() * lowerCase.length)];
    password += numbers[Math.floor(Math.random() * numbers.length)];
    password += symbols[Math.floor(Math.random() * symbols.length)];

    while (length > password.length){
        password += allChars[Math.floor(Math.random() * allChars.length)];

    }
    passwordBox.value = password;

}



function copyPassword(){
    if (passwordBox) {
        passwordBox.select();
        document.execCommand("copy");

        // You can also use the Clipboard API for modern browsers
        navigator.clipboard.writeText(passwordBox.value).then(function() {
            console.log('Password copied to clipboard');
        }).catch(function(err) {
            console.error('Failed to copy password: ', err);
        });
    }
}

const palettes = ['palette1', 'palette2', 'palette3'];

function getRandomPalette() {
    const randomIndex = Math.floor(Math.random() * palettes.length);
    return palettes[randomIndex];
}

function applyRandomPalette() {
    const body = document.body;
    const randomPalette = getRandomPalette();
    body.classList.add(randomPalette);
}

applyRandomPalette();
