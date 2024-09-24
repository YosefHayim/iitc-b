const data = [
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

const employeeList = document.querySelector(".employee-list");
function makeId() {
  let id = "";
  const possible =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  for (let i = 0; i < 5; i++) {
    id += possible.charAt(Math.floor(Math.random() * possible.length));
  }
  return id;
}

function showData() {
  for (let i = 0; i < data.length; i++) {
    const idNum = data[i].id;
    const fName = data[i].firstName;
    const Lname = data[i].lastName;
    const age = data[i].age;
    const startDateEmployee = data[i].startDate;
    const departmentEmployee = data[i].department;
    const salary = data[i].salary;

    const employeeRowData = document.createElement("li");
    employeeRowData.classList.add(`${makeId()}`);

    employeeRowData.innerHTML = `
      <p>First Name: ${fName}</p>
      <p>Last Name: ${Lname}</p>
      <p>Age: ${age}</p>
      <p>Start Date: ${startDateEmployee}</p>
      <p>Department: ${departmentEmployee}</p>
      <p>Salary: ${salary}</p>
    `;
    employeeList.append(employeeRowData);
  }
}

function addEmployeeRow() {
  const formDataEl = document.querySelector(".formData");

  formDataEl.addEventListener("submit", (ev) => {
    ev.preventDefault();

    const firstNameInputValue = document.querySelector("#fname").value;
    const lastNameInputValue = document.querySelector("#lname").value;
    const ageInputValue = document.querySelector("#age").value;
    const startDateInputValue = document.querySelector("#start-date").value;
    const departmentDropdownChoice = document.querySelector(
      "#department-employees"
    ).value;
    const salaryInput = document.querySelector("#salary").value;

    const employeeRowData = document.createElement("li");
    employeeRowData.classList.add(`${makeId()}`);

    employeeRowData.innerHTML = `
      <p>First Name: ${firstNameInputValue}</p>
      <p>Last Name: ${lastNameInputValue}</p>
      <p>Age: ${ageInputValue}</p>
      <p>Start Date: ${startDateInputValue}</p>
      <p>Department: ${departmentDropdownChoice}</p>
      <p>Salary: ${salaryInput}</p>
    `;

    employeeList.append(employeeRowData);
  });
}

function deleteEmployeeRow() {
  const dataRows = employeeList.querySelectorAll("li");
  const optionsEmployees = document.querySelector("#employee-delete");

  for (let i = 0; i < dataRows.length; i++) {
    const employeeData = dataRows[i];

    const createOptionEl = document.createElement("option");
    
  }
}

showData();
addEmployeeRow();
deleteEmployeeRow();
