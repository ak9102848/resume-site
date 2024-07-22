document.addEventListener('DOMContentLoaded', () => {
    const darkModeToggle = document.getElementById('darkModeToggle');
    const form = document.forms['submit-to-google-sheet'];
    const formMessage = document.getElementById('formMessage');
    const menuToggle = document.getElementById('click');
    const navMenu = document.querySelector('nav ul');

    darkModeToggle.addEventListener('click', () => {
        document.body.classList.toggle('dark-mode');
    });

    menuToggle.addEventListener('change', () => {
        navMenu.classList.toggle('show');
    });

    form.addEventListener('submit', e => {
        e.preventDefault();
        fetch(scriptURL, { method: 'POST', body: new FormData(form) })
            .then(response => {
                console.log('Success!', response);
                formMessage.style.display = 'block'; // Show success message
                form.reset(); // Clear form fields
                setTimeout(() => {
                    formMessage.style.display = 'none'; // Hide success message after 3 seconds
                }, 3000);
            })
            .catch(error => console.error('Error!', error.message));
    });
});
