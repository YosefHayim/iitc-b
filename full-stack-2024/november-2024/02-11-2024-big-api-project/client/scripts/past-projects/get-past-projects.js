import { baseUrl } from "../global/global-dom-variables.js";

const getAllPastProjects = async () => {
  try {
    const res = await fetch(`${baseUrl}/api/projects/projects`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (res.ok) {
      const data = await res.json();
      return data;
    }
  } catch (error) {
    console.error(`Had error during fetching all projects: ${error}`);
  }
};

export { getAllPastProjects };
