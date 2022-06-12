var email = "", 
    password = "",
    confirmPassword = "",
    firstName = "",
    lastName = "",
    Sex = undefined,
    iAgree = false;

    
    function register() {
        var validationResponse = { code: 200, message: "Sign up Sucessfully" };
        
        if (email.length == 0) {
            validationResponse = { code: 400, message: "Please enter email address" };
        }
        else if (!email.match (/^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/)) {
            
                validationResponse = { code: 400, message: "Email format not valid" };
        }   
        if (password.valueOf.length == 6) {
            validationResponse = { code: 400, message: "Must have a minimum of 6 characters" };
        }
        if (confirmPassword.valueOf.length == 6) {
            validationResponse = { code: 400, message: "Must have a minimum of 6 characters" };
        }
        if (firstName.length == 0) {
            validationResponse = { code: 400, message: "required" };
        }
        if (lastName.length == 0) {
            validationResponse = { code: 400, message: "required" };
        }
        if (Sex == undefined) {
            validationResponse = { code: 400, message: "please choose one" }
        }
        if (iAgree == false) {
            validationResponse = { code: 400, message: "Agree to the Terms and Conditions" }
        }
            return validationResponse;
        
    }