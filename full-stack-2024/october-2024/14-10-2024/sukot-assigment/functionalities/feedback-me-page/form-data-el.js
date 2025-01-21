import { feedbackFormPage } from "../dom/storage-elements-dom.js";

// Handles form submission on the "Share Your Thoughts" page.
const formAnswer = () => {
  feedbackFormPage.addEventListener("submit", (event) => {
    event.preventDefault(); // Prevent the default form submission behavior.

    // Create a FormData object to easily retrieve form values.
    const formData = new FormData(feedbackFormPage);

    // Extract values from the form.
    const username = formData.get("name"); // Get the user's name
    const email = formData.get("email"); // Get the user's email
    const message = formData.get("message"); // Get the user's message
    const rating = formData.get("rating"); // Get the user's rating

    // Create a mailto link with the feedback details.
    const mailtoLink = `mailto:yosefisabag@gmail.com?subject=Feedback from ${username}&body=Message: ${message}%0AEmail: ${email}%0ARating: ${rating}`;

    // Redirect the user to their email client with the pre-filled message.
    window.location.href = mailtoLink;
  });
};

export { formAnswer };
