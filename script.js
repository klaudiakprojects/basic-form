function checkFirstName() {
    const firstName = document.getElementById("first_name").value;
    if (firstName == "") document.getElementById("check_fname").innerHTML = "Please enter your first name";
    else document.getElementById("check_fname").innerHTML = "";
}

function checkLastName() {
    const lastName = document.getElementById("last_name").value;
    if (lastName == "") document.getElementById("check_lname").innerHTML = "Please enter your last name";
    else document.getElementById("check_lname").innerHTML = "";
}

function checkEmail() {
    const email = document.getElementById("email").value;
    if (email == "") document.getElementById("check_email").innerHTML = "Please enter your e-mail";
    else document.getElementById("check_email").innerHTML = "";
}


function checkPassword() {
    const password = document.getElementById("password").value;
    if (password == "") document.getElementById("check_password").innerHTML = "Please enter your password";
    else document.getElementById("check_password").innerHTML = "";
}

function confirmPassword() {
    if (confirmPassword == "") document.getElementById("check_confirm_password").innerHTML = "Please confirm your password";
    else document.getElementById("check_confirm_password").innerHTML = "";
}

function validatingForm() {
    let password = document.querySelector('.password').value;
    let confirmPassword = document.querySelector('.confirm_password').value;
    if (password !== confirmPassword) {
        return false;
    } 
      window.location.replace("success-page.html");
     return false
}

function passwordValidating() {
    let password = document.querySelector('.password').value;
    let confirmPassword = document.querySelector('.confirm_password').value;
    if (password !== confirmPassword) {
        alert("Password don't match")
    }
}

