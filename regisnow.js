function validateData() {
    var fullname = document.getElementById("fullname");
    var email = document.getElementById("email");
    var password = document.getElementById("password");
    var gender = document.getElementById("gender");
    var dateOfBirth = document.getElementById("date");

    if (fullname.value.length < 3) {
        alert("Username must be at least 3 characters and max 30 characters");
        return false;
    } else if (!email.value.endsWith("@gmail.com")) {
        alert("Email must end with @gmail.com");
        return false;
    } else if (address.value.length < 6) {
        alert("address must be at least 6 characters long!");
        return false;
    } else if (gender.value === "") {
        alert("Please select your gender");
        return false;
    } else if (!dateOfBirth.value) {
        alert("Please enter your date of birth");
        return false;
    }

    var dob = new Date(dateOfBirth.value);
    var today = new Date();
    var age = today.getFullYear() - dob.getFullYear();
    var monthDiff = today.getMonth() - dob.getMonth();
    if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < dob.getDate())) {
        age--;
    }

    if (age === 0) {
        alert("Birth date must be filled!");
        return false;
    } else {
        alert("Submit data success!");
        return true;
    }
}
