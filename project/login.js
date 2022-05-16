window.onload = function () {
  async function fetchLogin() {
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    try {
      let result = await fetch("http://localhost:3000/api/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          username,
          password,
        }),
      });

      let response = await result.json();

      if (response.status !== "error") {
        localStorage.setItem("accessToken", response.accessToken);
        window.location = "/project/music.html";
      } else {
        alert(response.message);
      }
    } catch (error) {
      alert(error.toString());
    }
  }

  const loginForm = document.getElementById("login-form");

  loginForm.addEventListener("submit", function (event) {
    event.preventDefault();

    fetchLogin();
  });
};
