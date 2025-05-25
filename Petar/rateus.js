function rateSite(rating) {
    // Store the rating (could be sent to a server or used locally)
    localStorage.setItem('siteRating', rating);

    // Optionally, update the UI to reflect the rating
    const stars = document.querySelectorAll('.star');
    stars.forEach((star, index) => {
        if (index < rating) {
            star.classList.add('rated');
        } else {
            star.classList.remove('rated');
        }
    });

    alert(`Thank you for rating us ${rating} out of 5 stars!`);
}

// Example: Attach event listeners to star elements
document.addEventListener('DOMContentLoaded', () => {
    const stars = document.querySelectorAll('.star');
    stars.forEach((star, index) => {
        star.addEventListener('click', () => {
            rateSite(index + 1);
        });
    });
});