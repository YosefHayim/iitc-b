import { feedbackFormPage } from "../dom/domEls.js";

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
