var email = "", 
    password = "",
    confirmPassword = "",
    firstName = "",
    lastName = "",
    Sex = undefined,
    iAgree = false;

    function register () {

    }

    function login () {

    }

    function forgot() {
        var validationResponse = { code: 200, message: "Forgot Password link sent" };
        
        if (email.length == 0) {
            validationResponse = { code: 400, message: "Please enter email address" };
        }
        else if (!email.match(/^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/)) {
            validationResponse = { code: 400, message: "Email format not valid" };
        }

        return validationResponse;
        
    }