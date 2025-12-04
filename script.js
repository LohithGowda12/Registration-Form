function validateForm() {
    const password       = document.getElementById("password").value.trim();
    const confirmPassword = document.getElementById("confirmPassword").value.trim();
    const errorElement   = document.getElementById("passwordError");

    errorElement.textContent = "";

    if (password.length < 6) {
        errorElement.textContent = "Password must be at least 6 characters.";
        return false;
    }

    if (password !== confirmPassword) {
        errorElement.textContent = "Passwords do not match.";
        return false;
    }

   
    alert("Registration successful! (Demo only, form not submitted)");
    return false; 
}
