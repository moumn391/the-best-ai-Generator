function toggleDarkMode() {
    document.body.classList.toggle('dark-mode');
}

function generateVideo() {
    let input = document.getElementById("videoPrompt").value;
    let output = document.getElementById("output");
    
    if (input.trim() === "") {
        output.innerHTML = "Please enter a valid video idea.";
        return;
    }

    output.innerHTML = "Generating video for: " + input + "...";
    setTimeout(() => {
        output.innerHTML = "✅ Video generated successfully!";
    }, 2000);
}

function login() {
    let username = document.getElementById("username").value;
    let password = document.getElementById("password").value;

    if (username === "admin" && password === "1234") {
        alert("Login successful!");
    } else {
        alert("Invalid credentials, try again.");
    }
}
