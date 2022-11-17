


function validate() {
  // alert("username = User and password = user121")
  var username = document.getElementById("username").value;
  var password = document.getElementById("password").value;
  
  let userList = ["User"]
  let passList = ["user121"]

  for (i = 0; i < userList.length; i++) {
    
    if (username == userList[i] && password == passList[i]) {
      window.location = "dashboard.html"; // Redirecting to other page.
      return false;
    } else {
      alert("username = User and password = user121")
      return false;
    }
  }
}


document.addEventListener("keypress", function (event) {
  // If the user presses the "Enter" key on the keyboard
  if (event.key === "Enter") {
    // Cancel the default action, if needed
    function validate() {
      // alert("username = User and password = user121")
      var username = document.getElementById("username").value;
      var password = document.getElementById("password").value;

      let userList = ["User"]
      let passList = ["user121"]

      for (i = 0; i < userList.length; i++) {

        if (username == userList[i] && password == passList[i]) {
          window.location = "dashboard.html"; // Redirecting to other page.
          return false;
        } else {
          alert("username = User and password = user121")
          return false;
        }
      }
    }
    // Trigger the button element with a click
    document.getElementById("submit").click();
  }
});