import employeeList from "./static-data.js";
import { showAllEmployees } from "./show-employees.js";
import { addNewEmployee } from "./add-employee.js";
import createUniqueId from "./createEmployeeID.js";
import removeEmployee from "./remove-employee.js";
import filterEmployeesByDepartment from "./filter-employee.js";
import editEmployee from "./edit-employee.js";
import saveToLocalStorage from "./localStorage.js";

const employeeListElement = document.querySelector(".employee-list");

saveToLocalStorage(employeeList);

showAllEmployees(employeeList, createUniqueId);

addNewEmployee(
  employeeListElement,
  employeeList,
  saveToLocalStorage,
  createUniqueId
);

removeEmployee(employeeListElement, employeeList, saveToLocalStorage);

filterEmployeesByDepartment(
  employeeListElement,
  employeeList,
  createUniqueId,
  showAllEmployees
);

editEmployee(employeeListElement, employeeList, saveToLocalStorage);
