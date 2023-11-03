let resumeBtn = document.getElementById("resumeButton");
resumeBtn.addEventListener("click", showPrice);

function showPrice() {
    let communicationAlert = document.getElementById("payResume");
    let discountSelect = document.getElementById("ticket-category");
    let discount = discountSelect.value;
    let amountInput = document.getElementById("ticket-amount");
    let amount = amountInput.value;
    let realPrice = amount*(200 - (200*discount));
    if (Number.isNaN(realPrice)){
    communicationAlert.textContent = `Total a Pagar: $`;
    } else {
    communicationAlert.textContent = `Total a Pagar: $${realPrice}`;
    }
}



