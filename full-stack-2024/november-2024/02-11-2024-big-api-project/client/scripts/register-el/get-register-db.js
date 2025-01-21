import { signUpFormContainer } from "../global/global-dom-variables.js";
import { addUserDb } from "./post-user-db.js";

const getRegisterData = () => {
  if (signUpFormContainer) {
    signUpFormContainer.addEventListener("submit", (ev) => {
      ev.preventDefault();

      const formData = new FormData(signUpFormContainer);

      const fName = formData.get("fname");
      const lName = formData.get("lname");
      const password = formData.get("password");
      const email = formData.get("email");

      addUserDb(fName, lName, password, email);
    });
  }
};

export { getRegisterData };
