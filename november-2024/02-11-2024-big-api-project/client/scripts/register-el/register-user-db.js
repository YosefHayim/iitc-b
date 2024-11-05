import { baseUrl } from "../global/global-dom-variables.js";

const addUserDb = async (fName, lName, password, email) => {
  const data = { fName, lName, password, email };

  try {
    const res = await fetch(`${baseUrl}/api/users/users`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    if (res) {
      const result = await res.json();
      console.log(result);
    }
  } catch (error) {
    console.error(`Had error durning registration: ${error}`);
  }
};

export { addUserDb };
