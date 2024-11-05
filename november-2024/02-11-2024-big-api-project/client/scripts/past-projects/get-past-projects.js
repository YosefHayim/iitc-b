import { baseUrl } from "../global/global-dom-variables.js";

const getAllPastProjects = async () => {
  if (window.location.href.includes(`projects-data`))
    try {
      const res = await fetch(`${baseUrl}/api/projects/projects`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (res) {
        const data = await res.json();
        return data;
      } else {
        console.error("Failed to get all projects data:", res.status);
      }
    } catch (error) {
      console.error(`Had error during fetching all projects: ${error}`);
    }
};

export { getAllPastProjects };
