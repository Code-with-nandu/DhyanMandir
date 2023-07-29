function login() {
	var loginMethod = document.getElementById("login-method").value;
	var loginValue = document.getElementById("login-value").value;
	var lastName = document.getElementById("last-name").value;
	// Check that all fields are filled in
	if (loginMethod && loginValue && lastName) {
		// TODO: Perform login validation and retrieve booking details
		// Redirect to the check-in page
		window.location.href = "check-in.html";
	} else {
		alert("Please fill in all fields.");
	}
}
