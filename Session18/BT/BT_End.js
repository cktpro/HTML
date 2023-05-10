const UserLogin = {username:"admin", password:"@Admin123"};
function login(){
    var user = document.getElementById("user").value;
    var pass = document.getElementById("pass").value;
    if(user==UserLogin.username && pass==UserLogin.password )
    {
        alert("Login Successul!")
    }
    else{
        alert("Login Fail!")
    }
}