const employees = [
  {
    firstName: "Alice",
    lastName: "Smith",
    age: 28,
    startDate: "2020-06-15",
    department: "Marketing",
    salary: 50000,
  },
  {
    firstName: "John",
    lastName: "Doe",
    age: 35,
    startDate: "2018-01-25",
    department: "Sales",
    salary: 60000,
  },
  {
    firstName: "Emma",
    lastName: "Johnson",
    age: 42,
    startDate: "2015-03-12",
    department: "IT",
    salary: 70000,
  },
  {
    firstName: "Michael",
    lastName: "Brown",
    age: 30,
    startDate: "2019-07-01",
    department: "Finance",
    salary: 55000,
  },
  {
    firstName: "Sophia",
    lastName: "Williams",
    age: 26,
    startDate: "2021-05-20",
    department: "HR",
    salary: 45000,
  },
  {
    firstName: "David",
    lastName: "Taylor",
    age: 39,
    startDate: "2017-09-14",
    department: "Operations",
    salary: 64000,
  },
  {
    firstName: "Laura",
    lastName: "White",
    age: 32,
    startDate: "2016-11-03",
    department: "Logistics",
    salary: 50000,
  },
];

const employeeListEl = document.querySelector(".employee-list");

function generateId() {
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

function displayAllEmployees() {
  for (let i = 0; i < employees.length; i++) {
    const employee = employees[i];

    const employeeDataLI = document.createElement("li");
    employeeDataLI.classList.add(`${generateId()}`);

    employeeDataLI.innerHTML = `
    <div class="employee-info">
      <label>First Name:</label>
      <p class="fName">${employee.firstName}</p>
  
      <label>Last Name:</label>
      <p class="lName">${employee.lastName}</p>
  
      <label>Age:</label>
      <p class="age">${employee.age}</p>
  
      <label>Start Date:</label>
      <p class="s-date">${employee.startDate}</p>
  
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

    employeeListEl.append(employeeDataLI);
  }
}

function addNewEmployee() {
  const formEl = document.querySelector(".formData");

  formEl.addEventListener("submit", (event) => {
    event.preventDefault();

    const firstNameInputValue = document.querySelector("#fname").value;
    const lastNameInputValue = document.querySelector("#lname").value;
    const ageInputValue = document.querySelector("#age").value;
    const startDateInputValue = document.querySelector("#start-date").value;
    const departmentInputValue = document.querySelector(
      "#department-employees"
    ).value;
    const salaryInputValue = document.querySelector("#salary").value;

    const newEmployee = {
      firstName: firstNameInputValue,
      lastName: lastNameInputValue,
      age: ageInputValue,
      startDate: startDateInputValue,
      department: departmentInputValue,
      salary: salaryInputValue,
    };

    employees.push(newEmployee);

    const newEmployeeEl = document.createElement("li");
    newEmployeeEl.classList.add(`${generateId()}`);

    newEmployeeEl.innerHTML = `
    <div class="employee-info">
      <label>First Name:</label>
      <p class="fName">${firstNameInputValue}</p>
  
      <label>Last Name:</label>
      <p class="lName">${lastNameInputValue}</p>
  
      <label>Age:</label>
      <p class="age">${ageInputValue}</p>
  
      <label>Start Date:</label>
      <p class="s-date">${startDateInputValue}</p>
  
      <label>Department:</label>
      <p class="department">${departmentInputValue}</p>
  
      <label>Salary:</label>
      <p class="salary">${salaryInputValue}</p>
    </div>
    <div class="action-buttons">
      <button class="delete-button">Delete</button>
      <button class="edit-button">Edit</button>
      <button class="update-button">Update</button>
    </div>
  `;

    employeeListEl.append(newEmployeeEl);
  });
}

function removeEmployee() {
  employeeListEl.addEventListener("click", function (event) {
    if (event.target.classList.contains("delete-button")) {
      event.preventDefault();
      event.target.closest("li").remove();
    }
  });
}

function filterByDepartment() {
  const filterDropdownEl = document.querySelector("#filter-department");

  filterDropdownEl.addEventListener("change", (event) => {
    event.preventDefault();
    const selectedDepartment = event.target.value.toLowerCase();

    employeeListEl.innerHTML = "";

    if (selectedDepartment === "all" || selectedDepartment === "") {
      displayAllEmployees();
    } else {
      for (let i = 0; i < employees.length; i++) {
        const employee = employees[i];
        const employeeDepartment = employee.department.toLowerCase();

        if (employeeDepartment === selectedDepartment) {
          const filteredEmployeeEl = document.createElement("li");
          filteredEmployeeEl.classList.add(`${generateId()}`);

          filteredEmployeeEl.innerHTML = `
          <div class="employee-info">
            <label>First Name:</label>
            <p class="fName">${employee.firstName}</p>
        
            <label>Last Name:</label>
            <p class="lName">${employee.lastName}</p>
        
            <label>Age:</label>
            <p class="age">${employee.age}</p>
        
            <label>Start Date:</label>
            <p class="s-date">${employee.startDate}</p>
        
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

          employeeListEl.append(filteredEmployeeEl);
        }
      }
    }
  });
}

function editCurrentEmployee() {
  employeeListEl.addEventListener("click", function (event) {
    if (event.target.classList.contains("edit-button")) {
      event.preventDefault();

      const currentEmployeeData = event.target.closest("li");

      const fName = currentEmployeeData.querySelector(".fName");
      const lName = currentEmployeeData.querySelector(".lName");
      const age = currentEmployeeData.querySelector(".age");
      const startDate = currentEmployeeData.querySelector(".s-date");
      const department = currentEmployeeData.querySelector(".department");
      const salary = currentEmployeeData.querySelector(".salary");

      fName.contentEditable = "true";
      lName.contentEditable = "true";
      age.contentEditable = "true";
      startDate.contentEditable = "true";
      department.contentEditable = "true";
      salary.contentEditable = "true";

      currentEmployeeData.style.backgroundColor = "#f0f0f0";
    }

    if (event.target.classList.contains("update-button")) {
      event.preventDefault();

      fName.textContent = ` ${fName.textContent}`;
      lName.textContent = `${lName.textContent}`;
      age.textContent = `${age.textContent}`;
      startDate.textContent = `${startDate.textContent}`;
      department.textContent = `${department.textContent}`;
      salary.textContent = `${salary.textContent}`;

      fName.contentEditable = "false";
      lName.contentEditable = "false";
      age.contentEditable = "false";
      startDate.contentEditable = "false";
      department.contentEditable = "false";
      salary.contentEditable = "false";
    }
  });
}

displayAllEmployees();
addNewEmployee();
removeEmployee();
filterByDepartment();
editCurrentEmployee();
