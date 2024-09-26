import { showAllEmployees } from "./view.js";
import employeeList from "./static-data.js";
import { addNewEmployee } from "./add-employee.js";

const employeeListElement = document.querySelector(".employee-list");

function createUniqueId() {
  let randomId = "";
  const characters =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  for (let i = 0; i < 5; i++) {
    randomId += characters.charAt(
      Math.floor(Math.random() * characters.length)
    );
  }
  return randomId;
}

function removeEmployee() {
  employeeListElement.addEventListener("click", function (event) {
    if (event.target.classList.contains("delete-button")) {
      event.preventDefault();

      const employeeItem = event.target.closest("li");
      const employeeIndex = Array.from(employeeListElement.children).indexOf(
        employeeItem
      );

      employeeList.splice(employeeIndex, 1);

      saveToLocalStorage();

      employeeItem.remove();
    }
  });
}

function filterEmployeesByDepartment() {
  const filterDropdownElement = document.querySelector("#filter-department");

  filterDropdownElement.addEventListener("change", (event) => {
    event.preventDefault();
    const selectedDepartment = event.target.value.toLowerCase();

    employeeListElement.innerHTML = "";

    if (selectedDepartment === "all" || selectedDepartment === "") {
      showAllEmployees();
    } else {
      for (let i = 0; i < employeeList.length; i++) {
        const employee = employeeList[i];
        const employeeDepartment = employee.department.toLowerCase();

        if (employeeDepartment === selectedDepartment) {
          const filteredEmployeeElement = document.createElement("li");
          filteredEmployeeElement.classList.add(`${createUniqueId()}`);

          filteredEmployeeElement.innerHTML = `
          <div class="employee-info">
            <label>Profile Image:</label>
            <p class="profile-image">${employee.profileImage}</p>
            <label>First Name:</label>
            <p class="first-name">${employee.firstName}</p>
            <label>Last Name:</label>
            <p class="last-name">${employee.lastName}</p>
            <label>Age:</label>
            <p class="age">${employee.age}</p>
            <label>Start Date:</label>
            <p class="start-date">${employee.startDate}</p>
            <label>Department:</label>
            <p class="department">${employee.department}</p>
            <label>Salary:</label>
            <p class="salary">${employee.salary}</p>
          </div>
          <div class="action-buttons">
            <button class="delete-button">Delete</button>
            <button class="edit-button">Edit</button>
            <button class="update-button">Update</button>
          </div>
        `;

          employeeListElement.append(filteredEmployeeElement);
        }
      }
    }
  });
}

function editEmployee() {
  employeeListElement.addEventListener("click", function (event) {
    if (event.target.classList.contains("edit-button")) {
      event.preventDefault();

      const employeeItem = event.target.closest("li");

      const firstNameElement = employeeItem.querySelector(".first-name");
      const lastNameElement = employeeItem.querySelector(".last-name");
      const ageElement = employeeItem.querySelector(".age");
      const startDateElement = employeeItem.querySelector(".start-date");
      const departmentElement = employeeItem.querySelector(".department");
      const salaryElement = employeeItem.querySelector(".salary");

      firstNameElement.contentEditable = "true";
      lastNameElement.contentEditable = "true";
      ageElement.contentEditable = "true";
      startDateElement.contentEditable = "true";
      departmentElement.contentEditable = "true";
      salaryElement.contentEditable = "true";

      employeeItem.style.backgroundColor = "#f0f0f0";
    }

    if (event.target.classList.contains("update-button")) {
      event.preventDefault();

      const employeeItem = event.target.closest("li");
      const employeeIndex = Array.from(employeeListElement.children).indexOf(
        employeeItem
      );

      const firstName = employeeItem
        .querySelector(".first-name")
        .textContent.trim();
      const lastName = employeeItem
        .querySelector(".last-name")
        .textContent.trim();
      const age = employeeItem.querySelector(".age").textContent.trim();
      const startDate = employeeItem
        .querySelector(".start-date")
        .textContent.trim();
      const department = employeeItem
        .querySelector(".department")
        .textContent.trim();
      const salary = employeeItem.querySelector(".salary").textContent.trim();

      employeeList[employeeIndex] = {
        ...employeeList[employeeIndex],
        firstName: firstName,
        lastName: lastName,
        age: age,
        startDate: startDate,
        department: department,
        salary: salary,
      };

      saveToLocalStorage();

      employeeItem
        .querySelectorAll(".employee-info p")
        .forEach((p) => (p.contentEditable = "false"));

      employeeItem.style.backgroundColor = "";
    }
  });
}

function saveToLocalStorage() {
  localStorage.setItem("employeeData", JSON.stringify(employeeList));
}

saveToLocalStorage();
showAllEmployees(employeeList, createUniqueId);
addNewEmployee(
  employeeListElement,
  employeeList,
  saveToLocalStorage,
  createUniqueId
);
removeEmployee();
filterEmployeesByDepartment();
editEmployee();
