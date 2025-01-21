function saveToLocalStorage(employeeList) {
  if (!employeeList) {
    throw new Error("Habibi you didnt pass argument");
  }
  localStorage.setItem("employeeData", JSON.stringify(employeeList));
}

export default saveToLocalStorage;
