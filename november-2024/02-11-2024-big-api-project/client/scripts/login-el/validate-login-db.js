import { baseUrl } from "../global/global-dom-variables.js";

const isUserValid = async (email, password) => {
  const data = {
    email,
    password,
  };

  try {
    const res = await fetch(`${baseUrl}/api/users/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    if (res) {
      const result = await res.json();
      console.log(result);
    } else {
      console.error("Failed to log in:", res.status);
    }
  } catch (error) {
    console.error(`Had error during login: ${error}`);
  }
};

export { isUserValid };
