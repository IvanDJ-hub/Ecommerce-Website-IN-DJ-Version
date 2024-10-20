document.getElementById("subscribe").addEventListener("click", function () {
    // Get the value of the email input field
    var email = document.getElementById("emailInput").value;

    // Check if the email input is not empty
    if (email) {
        alert("Ти се абонира. Сега ще получаваш известия за новите продукти и промоции.");
        // Clear the email input field
        emailInput.value = "";
    } else {
        alert("Моля, въведете вашия имейл.");
    }
});
