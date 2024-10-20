document.addEventListener('DOMContentLoaded', function() {
    // Form submission handling
    var submitBtn = document.getElementById('submitBtn');
    if (submitBtn) { // Ensure that the submitBtn element exists
        submitBtn.addEventListener('click', function(event) {
            event.preventDefault(); // Prevent default form submission behavior

            var name = document.getElementById('name').value.trim();
            var email = document.getElementById('email').value.trim();
            var phone = document.getElementById('phone').value.trim();
            var message = document.getElementById('message').value.trim();

            if (name === "" || email === "" || phone === "" || message === "") {
                alert("Не сте попълнили всичко. Моля попълнете празното пространство.");
            } else {
                alert("Получихме съобщението ви. Очаквайте отговор до 24 часа.");
                // Clear input fields after successful submission
                document.getElementById('name').value = "";
                document.getElementById('email').value = "";
                document.getElementById('phone').value = "";
                document.getElementById('message').value = "";

                // Restore placeholders
                inputs.forEach(input => {
                    input.placeholder = input.getAttribute('data-placeholder'); // Restore original placeholder
                });
            }
        });
    }

    // Placeholder removal on click and restoration on blur
    const inputs = document.querySelectorAll('.form-control');
    inputs.forEach(input => {
        // Store the original placeholder in a custom attribute
        input.setAttribute('data-placeholder', input.placeholder);

        // Remove placeholder on focus (click)
        input.addEventListener('focus', function() {
            this.placeholder = ''; // Remove placeholder when clicked
        });

        // Restore placeholder if the field is empty after losing focus
        input.addEventListener('blur', function() {
            if (this.value === '') {
                this.placeholder = this.getAttribute('data-placeholder'); // Restore original placeholder
            }
        });

        // Change the text color to white when typing
        input.addEventListener('input', function() {
            this.style.color = '#fff'; // Set text color to white
        });
    });
});