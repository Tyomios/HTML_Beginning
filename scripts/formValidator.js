function validateForm()
{
    var isValid = true;
    var errorList = "";
    var form = document.forms["mainForm"];
    var isValidName = isNameValid(form["name"].value);
    var isValidEmail = isEmailValid(form["email"].value);
    var isValidPassword = isPasswordValid(form["password"].value);
    var isPasswordsEqual = form["password"].value === form["password2"].value;
    if(!isValidName)
    {
        errorList += "<p>Name is not valid</p>";
        isValid = false;
    }
    if(!isValidEmail)
    {
        errorList += "<p>Email is not valid</p>";
        isValid = false;
    }
    if(!isValidPassword)
    {
        errorList += "<p>Password is not valid</p>";
        isValid = false;
    }
    if(!isPasswordsEqual)
    {
        errorList += "<p>Passwords are not equal</p>";
        isValid = false;
    }
    if(!isValid)
    {
        var errorSpan = document.getElementById("errorSpan");
        errorSpan.innerHTML = errorList;
    }
}

function isNameValid(name)
{
    var isValid = true;
    var namePattern = /^[a-zA-Z]+$/;
    if(!namePattern.test(name))
    {
        isValid = false;
    }
    
    return isValid;
}

function isEmailValid(email)
{
    var isValid = true;
    var emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    if(!emailPattern.test(email))
    {
        isValid = false;
    }
    
    return isValid;
}

function isPasswordValid(password)
{
    var isValid = true;
    var passwordPattern = /^[a-zA-Z0-9]{6,}$/;
    if(!passwordPattern.test(password))
    {
        isValid = false;
    }
    
    return isValid;
}