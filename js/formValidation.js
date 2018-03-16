
function validateForm() {
    var errorMessage = "";
    var errorReturn = true;
    document.getElementById("errorMessage").innerHTML = errorMessage;
    var email = document.forms["myForm"]["email"].value;
    var username = document.forms["myForm"]["un"].value;
    var password = document.forms["myForm"]["psw"].value;
    var repeatPassword = document.forms["myForm"]["psw-repeat"].value;

    

    var strUsername = String(username);
    var strEmail = String(email);
    var strPassword = password;
    var strRpassword = repeatPassword;
    if (username == "") {
        errorMessage += "*Name must be filled out <br>";
        errorReturn = false;
    }
    if(strUsername.length >5){
        errorMessage += "*Username is greater than 5 characters.It must be included 5 long characters!<br>";
        errorReturn = false;
    } 
    if(strUsername.length <5){
        errorMessage += "*Username is less than 5 characters. It must be included 5 long characters!<br>";
        errorReturn = false;
    }

    if(strPassword.length > 4 ){
        errorMessage += "*Password must be 4 characters!<br>";
        errorReturn = false;
    }
    if(strRpassword != strPassword || strRpassword > 4){
        errorMessage += "*Repeated password must be the same with the password!";
        errorReturn = false;
    }

    var regexp = /^[A-Z]/;
    if (!regexp.test(email)) {
        errorMessage += "*Invalid Email";
        //return false;
    }
    document.getElementById("errorMessage").innerHTML = errorMessage;

    return errorReturn;
}

function SignInValidation(){
    var errorMessage = "";
    var errorReturn = true;
    document.getElementById("signInError").innerHTML = errorMessage;
    var email = document.forms["signForm"]["email"].value;
    var password = document.forms["signForm"]["password"].value;

    var signInPassword = String(password);

    if(signInPassword == "" || email == ""){
        errorMessage += "*Check your password or email!<br>";
        errorReturn = false;
    }

    if(signInPassword.length >4 || signInPassword.length <4){
        errorMessage += "*Password must be 4 characters!<br>";
        errorReturn = false;
    }

    var regexp = /^[A-Z]/;

    if (regexp.test(email)) {
        errorMessage += "*Invalid Email";
        errorReturn = false;
    }
    document.getElementById("signInError").innerHTML = errorMessage;
        return errorReturn;

}