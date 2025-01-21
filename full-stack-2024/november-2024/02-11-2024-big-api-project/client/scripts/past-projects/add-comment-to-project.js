import { pastProjectsContainer } from "../global/global-dom-variables.js";

const addCommentToProject = async () => {
  if (pastProjectsContainer) {
    pastProjectsContainer.addEventListener("click", (e) => {
      e.preventDefault();

      const submitBtn = e.target.closest(".submit-comment");

      if (submitBtn) {
        const commentInput =
          submitBtn.parentElement.querySelector(".comment-input");
        if (commentInput) {
        }
      }
    });
  }
};

export { addCommentToProject };
