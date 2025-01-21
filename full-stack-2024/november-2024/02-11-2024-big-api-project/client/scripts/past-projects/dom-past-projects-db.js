import { pastProjectsContainer } from "../global/global-dom-variables.js";
import { getAllPastProjects } from "./get-past-projects.js";

const projectSkeletons = async () => {
  const projects = await getAllPastProjects();
  console.log(projects);

  if (pastProjectsContainer) {
    projects.forEach((project) => {
      const projectCard = document.createElement("div");
      projectCard.id = `${project._id}`;
      projectCard.classList.add("project-card");
      projectCard.innerHTML = `
      <h2>${project.name}</h2>
      <div class="user-info-container">
        <img src="${project.userSchema.profileImg}" alt="user profile image" class="user-profile-img">
        <h3>Posted by: ${project.userSchema.fName} ${project.userSchema.lName}</h3>
      </div>
      <p>Description: ${project.description}</p>
      <p>Status: ${project.status}</p>
      <p>Created at: ${project.createdAt}</p>
      <div class="comments-container">
      <input type="text" placeholder="add a comment" class="comment-input">
      <button class="submit-comment">Submit comment</button>
      </div>
      `;
      pastProjectsContainer.appendChild(projectCard);
    });
  }
};

export { projectSkeletons };
