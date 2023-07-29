document.addEventListener("DOMContentLoaded", function () {
  const form = document.querySelector("form");
  const statusElement = document.getElementById("status");

  form.addEventListener("submit", function (event) {
    event.preventDefault();
    
    // Get the form inputs
    const firstName = document.querySelector('input[name="firstname"]').value;
    const lastName = document.querySelector('input[name="lastname"]').value;
    const orgName = document.querySelector('input[name="orgname"]').value;
    const designation = document.querySelector(
      'input[name="designation"]'
    ).value;
    const contactNumber = document.querySelector(
      'input[name="contactnumber"]'
    ).value;
    const email = document.querySelector('input[name="email"]').value;

    // Create an object with the user data
    const userData = {
      name: firstName + " " + lastName,
      orgname: orgName,
      designation: designation,
      contact: contactNumber,
      email: email,
    };

    // Send the data to the server using AJAX
    var xhr = new XMLHttpRequest();
    xhr.open("POST", "https://ncsrc.in/create_user.php");
    xhr.setRequestHeader("Content-Type", "application/json");

    xhr.onload = function () {
      if (xhr.status === 200) {
        // Request was successful
        statusElement.textContent = "Registeration successful. we are looking forward to meeting you in the event.";
      } else {
        // Request failed
        statusElement.textContent = "Error! User not created.";
      }
    };
    xhr.send(JSON.stringify(userData));
  });
});
