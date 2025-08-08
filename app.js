
function getuser() {
    var user = localStorage.getItem("user");
    if (user) {
        user = JSON.parse(user);
    } else {
        user = [];
    }
    return user;
}


// let myFuction=()=>{
//     console.log()
// }

function register() {
    const username = document.getElementById("username");
    const email = document.getElementById("email");
    const password = document.getElementById("password");

    // Check if fields are empty
    if (!username.value || !email.value || !password.value) {
        alert("Please fill all fields.");
        return;
    }

    let users = getuser();

    // Check if email is already registered
    const alreadyExists = users.some(u => u.email === email.value);
    if (alreadyExists) {
        alert("Email already registered.");
        return;
    }

    const newUser = {
        username: username.value,
        email: email.value,
        password: password.value
    };

    users.push(newUser);
    localStorage.setItem("user", JSON.stringify(users));

    // Clear fields
    username.value = "";
    email.value = "";
    password.value = "";

    alert("Registration successful!");

    location= "login.html"; // Redirect to login page after registration
}

function login() {
    const email = document.getElementById("login-email");
    const password = document.getElementById("login-password");

    if (!email.value || !password.value) {
        alert("Please enter both email and password.");
        return;
    }

    const users = getuser();
    const matchedUser = users.find(user => user.email === email.value && user.password === password.value);

    if (matchedUser) {
        alert("Login successful!");
        console.log("Logged in:", matchedUser.username);

         location= "indexx.html"; // Redirect to home page after login
    } else {
        alert("Invalid email or password.");
    }
    email.value = password.value = "";

}
