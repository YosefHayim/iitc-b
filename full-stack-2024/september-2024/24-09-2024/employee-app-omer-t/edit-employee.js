function editEmployee(employeeListElement, employeeList, saveToLocalStorage) {
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

      saveToLocalStorage(employeeList);

      employeeItem
        .querySelectorAll(".employee-info p")
        .forEach((p) => (p.contentEditable = "false"));

      employeeItem.style.backgroundColor = "";
    }
  });
}

export default editEmployee;
