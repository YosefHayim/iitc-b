import { getRandomEmployeeImage } from "./employees-images.js";

const employeeData = localStorage.getItem("employeeData");

let employeeList = [];

if (employeeData?.length > 0) {
  employeeList = JSON.parse(employeeData);
} else {
  employeeList = [
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
  ];
}

export default employeeList;
