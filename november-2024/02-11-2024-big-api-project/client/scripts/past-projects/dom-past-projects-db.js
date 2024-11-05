import { pastProjectsContainer } from "../global/global-dom-variables.js";
import { getAllPastProjects } from "./get-past-projects.js";

const projectSkeletons = async () => {
  const projects = await getAllPastProjects();

  projects.forEach((project) => {
    console.log(project);

    const projectCard = document.createElement("div");
    projectCard.innerHTML = `
    <h2>Project name: ${project.name}</h2>
    <p>Description: ${project.description}</p>
    <p>Status: ${project.status}</p>
    <p>Created at: ${project.createdAt}</p>
    `;
    pastProjectsContainer.appendChild(projectCard);
  });
};

export { projectSkeletons };
