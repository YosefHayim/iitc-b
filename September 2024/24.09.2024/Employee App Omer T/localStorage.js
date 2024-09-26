function saveToLocalStorage(employeeList) {
  localStorage.setItem("employeeData", JSON.stringify(employeeList));
}

export default saveToLocalStorage;
