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

    registerUserBackend(fName, lName, password, email);
  });
};

const registerUserBackend = async (fName, lName, password, email) => {
  console.log(fName, lName, password, email);

  const data = { fName, lName, password, email };
  console.log(data);

  try {
    const res = await fetch(`${baseUrl}/api/users/users`, 
      {
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

registerPageEl();
