const form = document.getElementById("form");
const statusElement = document.getElementById("status");
const fetchUser = document.getElementById("fetchUser");
const logoutButton = document.getElementById("logout");
const logoutButtonCookie = document.getElementById("logoutCookie");
const form2 = document.getElementById("form2");
const userName = document.getElementById("userName");
const message = document.getElementById("message");
const users = document.getElementById("users");
const userNameMain = document.getElementById("user-name");

function iniciarSesion(userEmail, userPassword) {
  if (form.email.value === undefined) {
    form.email.value = userEmail;
  } else if (form.password.value === undefined) {
    form.password.value = userPassword;
  }

  fetch("http://localhost:4000/auth/login", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      email: form.email.value /*=== undefined ? userEmail : form.email.value*/,
      password:
        form.password
          .value /*=== undefined ? userPassword : form.userPassword.value*/,
    }),
    credentials: "include",
  })
    .then((res) => {
      return res.json();
    })
    .then((data) => {
      localStorage.setItem("token", data.token);
      statusElement.innerText = "Sesión iniciada";
      localStorage.setItem("name", data.data.firstName);
      userNameMain.innerText = localStorage.getItem("name");
      console.log(data.data.firstName);
    });
}

userNameMain.innerText = localStorage.getItem("name");

if (localStorage.getItem("token")) {
  statusElement.innerText = "Sesión iniciada";
} else {
  statusElement.innerText = "Sin permisos";
}

form.onsubmit = (event) => {
  event.preventDefault();
  iniciarSesion();
  form.email.value = "";
  form.password.value = "";
};

fetchUser.onclick = () => {
  fetch("http://localhost:4000/users", {
    // headers: {
    //   "Authorization": "Bearer " + localStorage.getItem("token")
    // }
    credentials: "include",
  })
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
    });
};

// logoutButton.onclick = () => {
//     localStorage.removeItem("token");
//     statusElement.innerText = "Sin permisos";
// };

logoutButtonCookie.onclick = () => {
  localStorage.removeItem("token");
  localStorage.removeItem("name");
  userNameMain.innerText = "";

  statusElement.innerText = "Sin permisos";
  fetch("http://localhost:4000/auth/logout", {
    // headers:{
    //     "Authorization":"Bearer "+localStorage.getItem("token")
    // },
    method: "POST",
    credentials: "include",
  })
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
      statusElement.innerText = "Sin permisos";
    });
};

function singUp() {
  fetch("http://localhost:4000/auth/signup", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      firstName: form2.firstName.value,
      lastName: form2.lastName.value,
      birthday: form2.birthday.value,
      city: form2.city.value,
      email: form2.email.value,
      password: form2.password.value,
    }),
    credentials: "include",
  })
    .then((res) => {
      return res.json();
    })
    .then((data) => {
      console.log(data);
      message.innerText = "Usuario agregado con exito";
    });
  setTimeout(() => {
    message.innerText = "";
  }, 4000);

  userEmail = form2.email.value;
  userPassword = form2.password.value;

  iniciarSesion(userEmail, userPassword);
}

form2.onsubmit = (event) => {
  event.preventDefault();
  singUp();
  form2.firstName.value = "";
  form2.lastName.value = "";
  form2.birthday.value = "";
  form2.city.value = "";
  form2.email.value = "";
  form2.password.value = "";
};
