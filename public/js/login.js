function validateForm() {
    var loginForm = document.forms['loginForm'];
    var usernameElement = loginForm['username'];
    var passwordElement = loginForm['password'];

    if (usernameElement == "") {
        usernameElement.style.border = "1px solid red";
        usernameElement.style.borderRadius = "3px";
        document.getElementById("usernameError").style.display = "inline";
    }
    if (usernameElement == "") {
        usernameElement.style.border = "1px solid red";
        usernameElement.style.borderRadius = "3px";
        document.getElementById("passwordError").style.display = "inline";
    }
    return false;
}