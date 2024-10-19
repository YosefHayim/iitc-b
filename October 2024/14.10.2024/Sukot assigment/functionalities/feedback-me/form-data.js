import { feedbackFormPage } from "../DOM/storage-elements-dom.js";

const formAnswer = () => {
  feedbackFormPage.addEventListener('submit', (event) => {
    event.preventDefault(); // Prevent form default submission

    const formData = new FormData(feedbackFormPage);

    // Extracting form data
    const username = formData.get('name');
    const email = formData.get('email');
    const message = formData.get('message');
    const rating = formData.get('rating');

    // Create a mailto link to send feedback via email
    const mailtoLink = `mailto:yosefisabag@gmail.com?subject=Feedback from ${username}&body=Message: ${message}%0AEmail: ${email}%0ARating: ${rating}`;
    window.location.href = mailtoLink; // Trigger the mailto link
  });
};

export { formAnswer };
