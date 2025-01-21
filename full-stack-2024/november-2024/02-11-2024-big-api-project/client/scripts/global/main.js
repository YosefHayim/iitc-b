import { getLoginData } from "../login-el/get-login-db.js";
import { addCommentToProject } from "../past-projects/add-comment-to-project.js";
import { projectSkeletons } from "../past-projects/dom-past-projects-db.js";
import { getProjectData } from "../post-a-project/get-project-details.js";
import { getRegisterData } from "../register-el/get-register-db.js";

getRegisterData();
getLoginData();
projectSkeletons();
getProjectData();
addCommentToProject();
