function validateForm() {
    errorMessage = "";
    document.getElementById("errorMessage").innerHTML = errorMessage;
    var fname = document.forms["myForm"]["fn"].value;
    var lname = document.forms["myForm"]["ln"].value;
    var username = document.forms["myForm"]["un"].value;
    var email = document.forms["myForm"]["email"].value;
    var password = document.forms["myForm"]["psw"].value;
    var rPassword = document.forms["myForm"]["psw-repeat"].value;

    if (fname == "" || lname == "" || username == "" || email == "" || password == "" || rPassword == "") {
      return false;
    }
    if (password != rPassword) {
      errorMessage = "Passwords do not match";
      document.getElementById("errorMessage").innerHTML = errorMessage;
      return false;
    }
    return true;
}

function SignInValidation(){
    var errorMessage = "";
    var errorReturn = true;
    document.getElementById("signInError").innerHTML = errorMessage;
    var login = document.forms["signForm"]["login"].value;
    var password = document.forms["signForm"]["password"].value;

    var signInPassword = String(password);

    if(signInPassword == "" || login == ""){
        errorReturn = false;
    }

    return errorReturn;

}
