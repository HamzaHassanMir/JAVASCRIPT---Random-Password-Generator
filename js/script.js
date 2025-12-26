const passWordBox = document.getElementById('pword'); 

const length = 16;
const upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowerCase = "abcdefghijklmnopqrstuvwxyz";
const nums = "0123456789";
const symbols = "@#$&/-_=+~%()><[]|}{^";
const allCharacters = upperCase + lowerCase + nums + symbols;

function genPassword(){
    let password = "";
    password += upperCase[Math.floor(Math.random() * upperCase.length)];
    password += lowerCase[Math.floor(Math.random() * lowerCase.length)];
    password += nums[Math.floor(Math.random() * nums.length)];
    password += symbols[Math.floor(Math.random() * symbols.length)];

    while(length > password.length){
        password += allCharacters[Math.floor(Math.random() * allCharacters.length)];
    }

    passWordBox.value = password;
}

async function copyToCLIPBOARD() {
    try {
        await navigator.clipboard.writeText(passWordBox.value);
        alert("Password copied to clipboard!");
    } catch (err) {
        console.error("Failed to copy: ", err);
    }
}