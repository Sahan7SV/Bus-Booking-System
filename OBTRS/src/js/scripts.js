document.getElementById('checkbox').addEventListener('change', function() {
    document.getElementById('code').disabled = !this.checked;
});

document.getElementById('Apply').addEventListener('click', function() {
    alert("Hello! You will receive further information about the offer in your email. Please check your email. Thank you for contacting us. Have a nice day.");
});

document.addEventListener('DOMContentLoaded', function() {
    var promoCodeInput = document.getElementById("code");
    promoCodeInput.addEventListener("input", validatePromoCode);

    function validatePromoCode() {
        var promoCode = promoCodeInput.value;
        var regex = /^[B]{1}\d{5}$/;
        var validationResult = document.getElementById("validationResult");
        if (regex.test(promoCode)) {
            validationResult.textContent = "Promo code is valid!";
            validationResult.style.color = "green";
        } else {
            validationResult.textContent = "Invalid promo code. Please enter a valid promo code.";
            validationResult.style.color = "red";
        }
    }
});
