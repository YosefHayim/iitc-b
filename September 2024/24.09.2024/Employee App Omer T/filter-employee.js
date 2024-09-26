function filterEmployeesByDepartment(
  employeeListElement,
  employeeList,
  createUniqueId,
  showAllEmployees
) {
  const filterDropdownElement = document.querySelector("#filter-department");

  filterDropdownElement.addEventListener("change", (event) => {
    event.preventDefault();
    const selectedDepartment = event.target.value.toLowerCase();

    employeeListElement.innerHTML = "";

    if (selectedDepartment === "all" || selectedDepartment === "") {
      showAllEmployees(employeeList, createUniqueId);
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
            <button class="update-button">Save</button>
          </div>
        `;

          employeeListElement.append(filteredEmployeeElement);
        }
      }
    }
  });
}

export default filterEmployeesByDepartment;
