function removeEmployee(employeeListElement, employeeList, saveToLocalStorage) {
  employeeListElement.addEventListener("click", function (event) {
    if (event.target.classList.contains("delete-button")) {
      event.preventDefault();

      const employeeItem = event.target.closest("li");
      const employeeIndex = Array.from(employeeListElement.children).indexOf(
        employeeItem
      );

      employeeList.splice(employeeIndex, 1);

      saveToLocalStorage(employeeList);

      employeeItem.remove();
    }
  });
}

export default removeEmployee;
