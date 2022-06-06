var email = "", 
    password = "",
    confirmPassword = "",
    firstName = "",
    lastName = "",
    Sex = undefined,
    iAgree = false;

    
    function login() {
        var validationResponse = { code: 200, message: "Login Sucessfully" };

        if (email.length == 0) {
            validationResponse = { code: 400, message: "Please enter email address" };
        }
        else if (!email.match(/^w+([\.-]?w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/)) {
            validationResponse = { code: 400, message: "Email format not valid" };
        }

        return validationResponse;
        
    }