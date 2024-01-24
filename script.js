let signupBtn = document.getElementById("signupBtn");
let signinBtn = document.getElementById("signinBtn");

signinBtn.onclick = function login() {
    let emailInput = document.getElementById("email");
    let passInput = document.getElementById("password");
    
    let email = emailInput.value;
    let password = passInput.value;

    if(email.trim() === "" || password.trim() === ""){
        alert("Please Enter The Details");
    }else if (email === "admin12@gmail.com" && password === "admin@123") {
        alert("Login Successful!!");
        window.location.href="./login.html";
    } else {
        alert("Invalid Username & Password");
    }
}