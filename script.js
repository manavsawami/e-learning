document.addEventListener('DOMContentLoaded', () => {
    // Handle form submissions
    const loginForm = document.getElementById('loginForm');
    const registerForm = document.getElementById('registerForm');
    const enrollButtons = document.querySelectorAll('.enroll');
    const viewButtons = document.querySelectorAll('.view');
    const completeButtons = document.querySelectorAll('.complete');
    const completedElement = document.getElementById('completed');
    let completedCount = 0;

    if (loginForm) {
        loginForm.addEventListener('submit', (e) => {
            e.preventDefault();
            // Implement login logic here
            alert('Login submitted');
        });
    }

    if (registerForm) {
        registerForm.addEventListener('submit', (e) => {
            e.preventDefault();
            // Implement registration logic here
            alert('Register submitted');
        });
    }

    if (enrollButtons) {
        enrollButtons.forEach(button => {
            button.addEventListener('click', () => {
                // Implement enroll logic here
                alert('Enrolled in course');
            });
        });
    }

    if (viewButtons) {
        viewButtons.forEach(button => {
            button.addEventListener('click', () => {
                // Implement view lecture logic here
                alert('Viewing lecture');
            });
        });
    }

    if (completeButtons) {
        completeButtons.forEach(button => {
            button.addEventListener('click', () => {
                // Implement complete lecture logic here
                completedCount++;
                completedElement.textContent = completedCount;
                alert('Lecture completed');
            });
        });
    }
});
