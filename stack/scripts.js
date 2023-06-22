var signup_btn=document.getElementsByClassName("signup-btn")

signup_btn[0].addEventListener("click",()=>{
    var loginformbox=document.getElementsByClassName("login-form")[0];
    var signinformbox=document.getElementsByClassName("signup-form")[0];
    loginformbox.style.top="-100%";
    signinformbox.style.top="0%";
});

var signin_btn=document.getElementsByClassName("signin-btn")
signin_btn[0].addEventListener("click",()=>{
    var loginformbox=document.getElementsByClassName("login-form")[0];
    var signinformbox=document.getElementsByClassName("signup-form")[0];
    loginformbox.style.top="0%";
    signinformbox.style.top="100%";
});