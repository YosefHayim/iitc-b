import { loginFormContainer } from "../global-dom-variables.js";
import { isUserValid } from "./validate-login-db.js";

const getLoginData = async () => {
  if (loginFormContainer) {
    loginFormContainer.addEventListener("submit", (e) => {
      e.preventDefault();

      const formData = new FormData(loginFormContainer);

      const email = formData.get("email");
      const password = formData.get("password");

      const isSuccess = isUserValid(email, password);

      if (isSuccess) {
        window.location.href = `../../index.html`;
      }
    });
  }
};

export { getLoginData };
