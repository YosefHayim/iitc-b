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
}

export default employeeList;
