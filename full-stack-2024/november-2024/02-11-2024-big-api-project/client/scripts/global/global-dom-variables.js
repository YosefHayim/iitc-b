const baseUrl = `http://localhost:3000`;
const signUpFormContainer = document.querySelector(`.sign-up`);
const loginFormContainer = document.querySelector(".login");
const pastProjectsContainer = document.querySelector(
  ".past-projects-container"
);
const postProjectFormContainer = document.querySelector(".post-a-project-form");
const commentInput = document.querySelector(".comment-input");

export {
  commentInput,
  postProjectFormContainer,
  baseUrl,
  signUpFormContainer,
  loginFormContainer,
  pastProjectsContainer,
};
