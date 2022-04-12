const accordion = document.getElementsByClassName("accordion-detail");

for (i=0; i<accordion.length; i++) {
  accordion[i].addEventListener('click', function () {
    this.classList.toggle('active')
  })
}

// SIGN UP Authentification:
// confirm password
let Spassword = document.getElementById("signUpPass");
let SconfirmPassword = document.getElementById("signUpPassC");
function validatePassword(){
  if(Spassword.value != SconfirmPassword.value){
    SconfirmPassword.setCustomValidity("Passwords do not match!");
  }else{
    SconfirmPassword.setCustomValidity("");
  }
}
Spassword.onchange = validatePassword;
SconfirmPassword.onkeyup = validatePassword;

let signUpB = document.getElementById("signUp");
signUpB.addEventListener('click', validatePassword);

// Admin Login:
let loginPass = document.getElementById("loginPass");
let loginMail = document.getElementById("loginMail");
function validateLogin(){
  // if(loginPass.value === "admin"){
  //   alert("hhh");
  // }
  alert("hhhhh");
};
let login = document.getElementById("login");
login.addEventListener("click", validateLogin);

// Harmburger
let icon = document.getElementById("hamburger");
function showHide(){
let mNav = document.getElementById("mNav");
  mNav.style.display = "block";
  let bodyHide = document.getElementById("container");
  bodyHide.addEventListener('click', hide)
  function hide(){
    mNav.style.display = "none";
    let icon = document.getElementById("hamburger");
    icon.style.display = "block";
  let closeIcon = document.getElementById("hideIcon")
  closeIcon.style.display = "none";
  }
}
// change toggle icon
function iconHide(){
  let icon = document.getElementById("hamburger");
  icon.style.display = "none";
  let closeIcon = document.getElementById("hideIcon")
  closeIcon.style.display = "block";
};

// close mNav
function hideNav(){
  let mNav = document.getElementById("mNav");
  mNav.style.display = "none";
  let icon = document.getElementById("hamburger");
  icon.style.display = "block"
  let closeIcon = document.getElementById("hideIcon")
  closeIcon.style.display = "none"; 
}

