const form = document.querySelector('.feedback-me-form');

form.addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the default form submission

    // Extract form data
    const formData = new FormData(form);
    const data = {
        name: formData.get('name'),
        email: formData.get('email'),
        message: formData.get('message'),
        rating: formData.get('rating')
    };

    console.log('Form Data:', data);
})