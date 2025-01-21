import { postProjectFormContainer } from "../global/global-dom-variables.js";
import { addProjectToDatabase } from "./post-project-db.js";

const getProjectData = async () => {
  if (postProjectFormContainer) {
    postProjectFormContainer.addEventListener("submit", (e) => {
      e.preventDefault();

      const formData = new FormData(postProjectFormContainer);

      const projectName = formData.get("project-name");
      const description = formData.get("description");
      const status = formData.get("status");

      addProjectToDatabase(projectName, description, status);
    });
  }
};

export { getProjectData };
