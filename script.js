// Get the form elements
const usernameInput = document.getElementById("username");
const passwordInput = document.getElementById("password");

// Add an event listener to the form's submit event
form.addEventListener("submit", (e) => {
  // Prevent the default form submission behavior
  e.preventDefault();

  // Get the values of the input fields
  const username = usernameInput.value;
  const password = passwordInput.value;

  // Save the data to local storage
  localStorage.setItem("username", username);
  localStorage.setItem("password", password);

  // Alert the user that the data has been saved
  alert("Data saved successfully!");
});