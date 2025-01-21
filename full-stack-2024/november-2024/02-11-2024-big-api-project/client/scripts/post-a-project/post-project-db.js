import { baseUrl } from "../global/global-dom-variables.js";

const addProjectToDatabase = async (projectName, description, status) => {
  const data = (projectName, description, status);

  data ? data : console.log("Data is not valid.");

  try {
    const res = await fetch(`${baseUrl}/api/projects/projects`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    const result = res ? await res.json() : "Received nothing in the response.";
    console.log(result);
  } catch (error) {
    console.error(
      `Error occurred while posting the project to database: ${error}`
    );
  }
};

export { addProjectToDatabase };
