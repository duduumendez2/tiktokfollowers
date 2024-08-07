// Add event listener to menu links
document.querySelectorAll('#menu a').forEach((link) => {
    link.addEventListener('click', (e) => {
        // Remove active class from all links
        document.querySelectorAll('#menu a').forEach((otherLink) => {
            otherLink.classList.remove('active');
        });
        // Add active class to the clicked link
        e.target.classList.add('active');
    });
});