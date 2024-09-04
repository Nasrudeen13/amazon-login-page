

const form = document.getElementById("login");
form.addEventListener('submit', function(event) {
    event.preventDefault(); //
    //  Prevent the default form submission
    const password = form.password.value;
    // Check if the password length is less than 6 characters
    if (password.length < 6) {
        alert('Password must be at least 6 characters long.');
    }
    else{
      form.submit();
    }
});