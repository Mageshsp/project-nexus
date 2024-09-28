// Select elements for login and signup
const loginText = document.querySelector(".title .Login");
const loginForm = document.querySelector("form.login");
const signupForm = document.querySelector("form.signup");
const loginBtn = document.querySelector("label.login");
const signupBtn = document.querySelector("label.Signup");
const signupLink = document.querySelector(".signup-link a");
const submit_signup=document.querySelector("#submit_signup");
const togglePassword=document.getElementById("togglepassword");
const togglePassword1=document.getElementById("togglepassword1");
let Password=document.getElementById("pass")
let signup_password = document.querySelector("#password-signup input[placeholder='Create Password']");

// Switch between login and signup forms
signupBtn.onclick = () => {
    loginForm.style.marginLeft = "-50%";
    loginText.style.marginLeft = "-50%";
};
loginBtn.onclick = () => {
    loginForm.style.marginLeft = "0%";
    loginText.style.marginLeft = "0%";
};
signupLink.onclick = (e) => {
    e.preventDefault();
    document.querySelector("#Signup").checked = true;
    loginForm.style.marginLeft = "-50%";
    loginText.style.marginLeft = "-50%";
};
togglePassword.onclick=()=>{
    if(Password.type==="password"){
        Password.type="text";
        togglePassword.src="./icons/eye-open.png"
    }
    else{
        Password.type="password"
        togglePassword.src="./icons/eye-close.png"
    }
}
togglePassword1.onclick=()=>{
    if(signup_password.type==="password"){
        signup_password.type="text";
        togglePassword1.src="./icons/eye-open.png"
    }
    else{
        signup_password.type="password"
        togglePassword1.src="./icons/eye-close.png"
    }
}


// Login form validation
loginForm.addEventListener("submit", (e) => {
    e.preventDefault();
    validateLogin();
});


function validateLogin() {
    let email = document.querySelector(".login #email input");
    let password = document.querySelector(".login #password input");

    // Regular expression for password: at least one number, one special character, and min 8 characters
    var password_Format = /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,}$/;

    // Email validation
    if (email.value == "") {
        setError(email, "Email is required");
    } else if (!email.value.includes("@") || !(email.value.endsWith(".com") || email.value.endsWith(".in"))) {
        setError(email, "Please enter a valid email");   
    } 
    else if(/[A-Z]/.test(email.value)){
        setError(email,"Please enter your email in lowecase.");
    }
    else {
        setSuccess(email);
    }

    // Password validation
    if (!password_Format.test(password.value)) {
        setError(password, "Password must be at least 8 characters long and include a number and special character");
    } else {
        setSuccess(password);
    }
}

// Signup form validation
signupForm.addEventListener("submit", (e) => {
    e.preventDefault();
    validateSignup();
});

function validateSignup() {
    let fullname = document.querySelector(".signup input[placeholder='Fullname']");
    let mobile = document.querySelector(".signup input[placeholder='Mobile Number']");
    let email = document.querySelector(".signup input[placeholder='Email address']");
    let password = document.querySelector(".signup input[placeholder='Create Password']");
    let confirmPassword = document.querySelector(".signup input[placeholder=' Confirm Password']");

    var password_Format = /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,}$/;

    // Fullname validation
    if (fullname.value.trim() == "") 
    {
        setError(fullname, "Fullname is required.");
    } else {
        setSuccess(fullname);
    }

    // Mobile number validation
    if (mobile.value.length != 10 || isNaN(mobile.value)) {
        setError(mobile, "Please enter a valid 10-digit mobile number.");
    } else {
        setSuccess(mobile);
    }

    // Email validation
    if (email.value == "") {
        setError(email, "Email is required");
    } else if (!email.value.includes("@") || !(email.value.endsWith(".com") || email.value.endsWith(".in"))) {
        setError(email, "Please enter a valid email");
    } 
    else if(/[A-Z]/.test(email.value)){
        setError(email,"Please enter your email in lowercase.");
    }
    else {
        setSuccess(email);
    }

    // Password validation
    if (!password_Format.test(password.value)) {
        setError(password, "Password must be at least 8 characters long and include a number and special character.");
    } else {
        setSuccess(password);
    }

    // Confirm password validation
    if (confirmPassword.value != password.value) {
        setError(confirmPassword, "Please ensure that your passwords are identical.");
    } else {
        setSuccess(confirmPassword);
    }
}


// Error and success message functions
function setError(element, message) {
    const parent = element.parentElement;
    const errorDisplay = parent.querySelector(".error");
    errorDisplay.textContent = message;
    if(element ===Password)
    {
        document.getElementById("togglepassword").classList.add("icon-change-login");
    }
   if(element === signup_password){
    document.getElementById("togglepassword1").classList.add("icon-change-signup");
   }
   
}
function setSuccess(element) {
    const parent = element.parentElement;
    const errorDisplay = parent.querySelector(".error");
    errorDisplay.textContent = "";
    if(element === Password){
        document.getElementById("togglepassword").classList.remove("icon-change-login");
    }
    if(element === signup_password){
        document.getElementById("togglepassword1").classList.remove("icon-change-signup");
    }
    
}

// setTimeout(()=>{
//     submit_signup.onclick=(e)=>{
//         e.preventDefault();
//         document.querySelector("#login").checked=true;
//         loginForm.style.marginLeft = "0%";
//         loginText.style.marginLeft = "0%";
//     }
// },5000)

