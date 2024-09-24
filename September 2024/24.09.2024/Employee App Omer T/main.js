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

    const listItemEl = document.createElement("li");
    listItemEl.classList.add(`${generateId()}`);

    listItemEl.innerHTML = `
      <p>First Name: ${employee.firstName}</p>
      <p>Last Name: ${employee.lastName}</p>
      <p>Age: ${employee.age}</p>
      <p>Start Date: ${employee.startDate}</p>
      <p>Department: ${employee.department}</p>
      <p>Salary: ${employee.salary}</p>
      <div>
        <button class="delete-button">Delete</button>
        <button class="edit-button">Edit</button>
        <button class="update-button">Update</button>
      </div>
    `;
    employeeListEl.append(listItemEl);
  }
}

function addNewEmployee() {
  const formEl = document.querySelector(".formData");

  formEl.addEventListener("submit", (event) => {
    event.preventDefault();

    const firstName = document.querySelector("#fname").value;
    const lastName = document.querySelector("#lname").value;
    const age = document.querySelector("#age").value;
    const startDate = document.querySelector("#start-date").value;
    const department = document.querySelector("#department-employees").value;
    const salary = document.querySelector("#salary").value;

    const newEmployeeEl = document.createElement("li");
    newEmployeeEl.classList.add(`${generateId()}`);

    newEmployeeEl.innerHTML = `
      <p>First Name: ${firstName}</p>
      <p>Last Name: ${lastName}</p>
      <p>Age: ${age}</p>
      <p>Start Date: ${startDate}</p>
      <p>Department: ${department}</p>
      <p>Salary: ${salary}</p>
      <div>
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
        const employeeDepartment = employees[i].department.toLowerCase();

        if (employeeDepartment === selectedDepartment) {
          const eachEmployee = employees[i];

          const filteredEmployeeEl = document.createElement("li");
          filteredEmployeeEl.classList.add(`${generateId()}`);

          filteredEmployeeEl.innerHTML = `
            <p>First Name: ${eachEmployee.firstName}</p>
            <p>Last Name: ${eachEmployee.lastName}</p>
            <p>Age: ${eachEmployee.age}</p>
            <p>Start Date: ${eachEmployee.startDate}</p>
            <p>Department: ${eachEmployee.department}</p>
            <p>Salary: ${eachEmployee.salary}</p>
            <div>
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

displayAllEmployees();
addNewEmployee();
removeEmployee();
filterByDepartment();
