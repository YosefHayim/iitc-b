const baseUrl = `http://localhost:3000`;
const signUpForm = document.querySelector(`form`);

const getServer = async (baseUrl) => {
  const res = await fetch(baseUrl);
  const data = res.json();
  console.log(data);
};

const registerPageEl = () => {
  signUpForm.addEventListener("submit", (ev) => {
    ev.preventDefault();

    const formData = new FormData(signUpForm);

    const fName = formData.get("fname");
    const lName = formData.get("lname");
    const password = formData.get("password");
    const email = formData.get("email");

    console.log(fName, lName, password, email);

    registerUserBackend(fName, lName, password, email);
  });
};

const registerUserBackend = async (fName, lName, pw, email) => {
  console.log(fName, lName, pw, email);

  const data = { fName, lName, pw, email };

  try {
    const res = await fetch(`${baseUrl}/api/users/users`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    if (res) {
      const result = res.json();
      console.log(result);
      console.log(`User has been registered successfully.`);
    }

    console.log(`Failed to register user.`);
  } catch (error) {
    console.error(`Had error durning registration: ${error}`);
  }
};

registerPageEl();
