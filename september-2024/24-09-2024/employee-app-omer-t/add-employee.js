import { getRandomEmployeeImage } from "./employees-images.js";

function addNewEmployee(
  employeeListElement,
  employeeList,
  saveToLocalStorage,
  createUniqueId
) {
  const formElement = document.querySelector(".formData");

  formElement.addEventListener("submit", (event) => {
    event.preventDefault();

    const profileImageInput = document.querySelector(".profile-image").value;
    const firstNameInput = document.querySelector("#fname").value;
    const lastNameInput = document.querySelector("#lname").value;
    const ageInput = document.querySelector("#age").value;
    const startDateInput = document.querySelector("#start-date").value;
    const departmentInput = document.querySelector(
      "#department-employees"
    ).value;
    const salaryInput = document.querySelector("#salary").value;

    const newEmployee = {
      profileImage: profileImageInput,
      firstName: firstNameInput,
      lastName: lastNameInput,
      age: ageInput,
      startDate: startDateInput,
      department: departmentInput,
      salary: salaryInput,
    };

    employeeList.push(newEmployee);

    saveToLocalStorage(employeeList);

    const newEmployeeElement = document.createElement("li");
    newEmployeeElement.classList.add(`${createUniqueId()}`);

    newEmployeeElement.innerHTML = `
    <div class="employee-info">
      <label>Profile Image:</label>
      <p class="profile-image">${getRandomEmployeeImage()}</p>
      <label>First Name:</label>
      <p class="first-name">${firstNameInput}</p>
      <label>Last Name:</label>
      <p class="last-name">${lastNameInput}</p>
      <label>Age:</label>
      <p class="age">${ageInput}</p>
      <label>Start Date:</label>
      <p class="start-date">${startDateInput}</p>
      <label>Department:</label>
      <p class="department">${departmentInput}</p>
      <label>Salary:</label>
      <p class="salary">${salaryInput}<span> ¥</span></p>
    </div>
    <div class="action-buttons">
      <button class="delete-button">Delete</button>
      <button class="edit-button">Edit</button>
      <button class="update-button">Save</button>
    </div>
  `;

    employeeListElement.append(newEmployeeElement);
  });
}

export { addNewEmployee };
