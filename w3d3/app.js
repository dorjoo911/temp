window.onload = function () {
  fetchEmployees();
};

async function fetchEmployees() {
  let result = await fetch("https://randomuser.me/api/?results=5");
  let emps = await result.json();
  renderEmployees(emps.results);
}

function renderEmployees(emps) {
  for (let i = 0; i < emps.length; i++) {
    let emp = emps[i];
    document.getElementById("img_" + i).src = emp.picture.large;
    document.getElementById("full-name_" + i).textContent =
      emp.name.first + " " + emp.name.last;
    document.getElementById("phone_" + i).textContent = `phone: ${emp.phone}`;
    document.getElementById("email_" + i).textContent = `email: ${emp.email}`;
  }
}
