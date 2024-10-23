import { feedbackFormPage } from "../DOM/storage-elements-dom.js";
// This function is responsible for getting the form details on share your thoughts page. when the user clicks or press enter we receive the following data.
const formAnswer = () => {
  feedbackFormPage.addEventListener('submit', (event) => {
    event.preventDefault();

    const formData = new FormData(feedbackFormPage);

    const username = formData.get('name');
    const email = formData.get('email');
    const message = formData.get('message');
    const rating = formData.get('rating');

    const mailtoLink = `mailto:yosefisabag@gmail.com?subject=Feedback from ${username}&body=Message: ${message}%0AEmail: ${email}%0ARating: ${rating}`;
    window.location.href = mailtoLink; 
  });
};

export { formAnswer };
