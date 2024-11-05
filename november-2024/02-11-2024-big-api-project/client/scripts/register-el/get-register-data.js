import { signUpForm } from "../global-dom-variables.js";
import { addUserDb } from "./register-user-db.js";

const getRegisterData = () => {
  if (signUpForm) {
    signUpForm.addEventListener("submit", (ev) => {
      ev.preventDefault();

      const formData = new FormData(signUpForm);

      const fName = formData.get("fname");
      const lName = formData.get("lname");
      const password = formData.get("password");
      const email = formData.get("email");

      addUserDb(fName, lName, password, email);
    });
  }
};

export { getRegisterData };
