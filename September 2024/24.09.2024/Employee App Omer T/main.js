const employeeImages = [
  "https://randomuser.me/api/portraits/men/40.jpg",
  "https://randomuser.me/api/portraits/men/15.jpg",
  "https://randomuser.me/api/portraits/men/73.jpg",
  "https://randomuser.me/api/portraits/men/50.jpg",
  "https://randomuser.me/api/portraits/men/17.jpg",
  "https://randomuser.me/api/portraits/men/69.jpg",
  "https://randomuser.me/api/portraits/men/22.jpg",
  "https://randomuser.me/api/portraits/men/65.jpg",
  "https://randomuser.me/api/portraits/men/54.jpg",
  "https://randomuser.me/api/portraits/men/56.jpg",
  "https://randomuser.me/api/portraits/men/61.jpg",
  "https://randomuser.me/api/portraits/men/21.jpg",
  "https://randomuser.me/api/portraits/men/91.jpg",
  "https://randomuser.me/api/portraits/men/14.jpg",
  "https://randomuser.me/api/portraits/men/68.jpg",
  "https://randomuser.me/api/portraits/men/35.jpg",
  "https://randomuser.me/api/portraits/men/46.jpg",
  "https://randomuser.me/api/portraits/men/23.jpg",
  "https://randomuser.me/api/portraits/men/28.jpg",
  "https://randomuser.me/api/portraits/men/93.jpg",
  "https://randomuser.me/api/portraits/women/32.jpg",
  "https://randomuser.me/api/portraits/women/47.jpg",
  "https://randomuser.me/api/portraits/women/18.jpg",
  "https://randomuser.me/api/portraits/women/11.jpg",
  "https://randomuser.me/api/portraits/women/55.jpg",
  "https://randomuser.me/api/portraits/women/71.jpg",
  "https://randomuser.me/api/portraits/women/89.jpg",
  "https://randomuser.me/api/portraits/women/24.jpg",
  "https://randomuser.me/api/portraits/women/36.jpg",
  "https://randomuser.me/api/portraits/women/44.jpg",
  "https://randomuser.me/api/portraits/women/64.jpg",
  "https://randomuser.me/api/portraits/women/85.jpg",
  "https://randomuser.me/api/portraits/women/76.jpg",
  "https://randomuser.me/api/portraits/women/26.jpg",
  "https://randomuser.me/api/portraits/women/99.jpg",
  "https://randomuser.me/api/portraits/women/53.jpg",
  "https://randomuser.me/api/portraits/women/38.jpg",
  "https://randomuser.me/api/portraits/women/58.jpg",
  "https://randomuser.me/api/portraits/women/62.jpg",
  "https://randomuser.me/api/portraits/women/12.jpg",
];

function getRandomEmployeeImage() {
  const randomIndex = Math.floor(Math.random() * employeeImages.length);
  return `<img src="${employeeImages[randomIndex]}" alt="Employee Image" width="50" height="50">`;
}

let employeeList = JSON.parse(localStorage.getItem("employeeData")) || [
  {
    profileImage: getRandomEmployeeImage(),
    firstName: "Alice",
    lastName: "Smith",
    age: 28,
    startDate: "2020-06-15",
    department: "Marketing",
    salary: 50000,
  },
  {
    profileImage: getRandomEmployeeImage(),
    firstName: "John",
    lastName: "Doe",
    age: 35,
    startDate: "2018-01-25",
    department: "Sales",
    salary: 60000,
  },
  {
    profileImage: getRandomEmployeeImage(),
    firstName: "Emma",
    lastName: "Johnson",
    age: 42,
    startDate: "2015-03-12",
    department: "IT",
    salary: 70000,
  },
  {
    profileImage: getRandomEmployeeImage(),
    firstName: "Michael",
    lastName: "Brown",
    age: 30,
    startDate: "2019-07-01",
    department: "Finance",
    salary: 55000,
  },
  {
    profileImage: getRandomEmployeeImage(),
    firstName: "Sophia",
    lastName: "Williams",
    age: 26,
    startDate: "2021-05-20",
    department: "HR",
    salary: 45000,
  },
  {
    profileImage: getRandomEmployeeImage(),
    firstName: "David",
    lastName: "Taylor",
    age: 39,
    startDate: "2017-09-14",
    department: "Operations",
    salary: 64000,
  },
  {
    profileImage: getRandomEmployeeImage(),
    firstName: "Laura",
    lastName: "White",
    age: 32,
    startDate: "2016-11-03",
    department: "Logistics",
    salary: 50000,
  },
];

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

function showAllEmployees() {
  for (let i = 0; i < employeeList.length; i++) {
    const employee = employeeList[i];

    const employeeItem = document.createElement("li");
    employeeItem.classList.add(`${createUniqueId()}`);

    employeeItem.innerHTML = `
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

    employeeListElement.append(employeeItem);
  }
}

function addNewEmployee() {
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

    saveToLocalStorage();

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
      <p class="salary">${salaryInput}</p>
    </div>
    <div class="action-buttons">
      <button class="delete-button">Delete</button>
      <button class="edit-button">Edit</button>
      <button class="update-button">Update</button>
    </div>
  `;

    employeeListElement.append(newEmployeeElement);
  });
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
showAllEmployees();
addNewEmployee();
removeEmployee();
filterEmployeesByDepartment();
editEmployee();
