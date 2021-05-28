

localStorage.getItem("userDetails") || [];


function login() {
    event.preventDefault();
    let user ={
        name :"viswa",
        password:"pass"
    }
    UserManager.pushUserDetails(user);
    
    let username = document.querySelector("#loginuser").value;
    let Password = document.querySelector("#loginpass").value;
    
    let userCheck=UserManager.authenticateUser(username,Password);
    
    if  (userCheck == true)
        window.location.href = "/Views/Navbarnew.html";
    else
        alert("login failed");
}
function signup() {
    event.preventDefault();
    let password = document.querySelector("#pass").value;
    let repeatpassword = document.querySelector("#repeatpass").value;
    if (password == repeatpassword) {
        let username = document.querySelector("#user").value;
        let Password = document.querySelector("#pass").value;
        let email=document.querySelector("#email").value;
     let user = {
        "name": username,
        "password": password,
        "email":email
    }
     UserManager.pushUserDetails(user);
        alert("Registered successfully ! now click login ");
    }
    else
        document.getElementById("nomatch").innerHTML = "Enter same password ";

}
