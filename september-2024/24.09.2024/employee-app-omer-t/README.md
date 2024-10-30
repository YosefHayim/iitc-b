# Employee Management Application

A simple app to manage employee data with the ability to add, edit, delete, and filter employees. Employee data is stored in `localStorage` for persistence.

## Features

- **Add Employee**: Fill out the form to add employees.
- **Edit/Delete Employee**: Modify or remove employees directly from the list.
- **Filter Employees**: Filter by department using a dropdown.
- **Persistent Storage**: Data is saved to `localStorage`.

## Files Overview

- **index.html**: Main UI structure.
- **style.css**: Styling for the app.
- **main.js**: Initializes the app and ties all modules together.
- **add-employee.js**: Handles adding new employees.
- **edit-employee.js**: Manages employee editing functionality.
- **remove-employee.js**: Handles deletion of employees.
- **filter-employee.js**: Filters employees by department.
- **createEmployeeID.js**: Generates unique employee IDs.
- **employees-images.js**: Provides random employee images.
- **localStorage.js**: Saves and retrieves data from `localStorage`.
- **show-employees.js**: Displays all employees.
- **static-data.js**: Default employee data if none exists in `localStorage`.

## How to Use

1. Open `index.html` in your browser.
2. Add, edit, delete, or filter employees.
3. Data is automatically saved in `localStorage`.

## Technologies

- HTML, CSS, JavaScript (ES6), `localStorage`.
