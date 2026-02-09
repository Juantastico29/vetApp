if (!localStorage.getItem("pin")) {
  localStorage.setItem("pin", "1234");
}

function loginOK() {
  localStorage.setItem("login", "true");
}

function isLogged() {
  return localStorage.getItem("login") === "true";
}

function logout() {
  localStorage.removeItem("login");
  location.href = "login.html";
}
