var letterChar = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var numbers = "1234567890";
var specialChar = "!#$%&?@-_.,~";
var generatePassword = document.querySelector("#generate");

function generate(){
    for ()
    var passwordLength = prompt("Please input password length between 8 and 128.");

        if (passwordLength < 128 || passwordLength > 8) {

        }
        else {
            alert("Please choose a length between 8 and 128");
        }

};

generatePassword.addEventListener("click", function (event) {
    event.preventDefault();
    generate()

});



// var letterCharChoice = confirm("Do you need letters?")

// if (letterCharChoice === true) {
//    Confirm("Do you need CAPITAL letters?")
// }


// var specialCharChoice = confirm("Do you need special characters?")

// var numberChoice = confirm("Do you need numbers?")

// if (specialCharChoice === true && 
//     letterCharChoice === true && 
//     numberChoice === true && 
//     letterChoiceCaps === true) {


// }