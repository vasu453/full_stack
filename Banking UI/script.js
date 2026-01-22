let balance = 1000;

const balanceText = document.getElementById("balance");
const amountInput = document.getElementById("amount");
const errorText = document.getElementById("error");

function updateBalance() {
    balanceText.textContent = `Balance: $${balance}`;
}

function deposit() {
    const amount = Number(amountInput.value);
    errorText.textContent = "";

    if (amount <= 0 || isNaN(amount)) {
        errorText.textContent = "Invalid amount!";
        return;
    }

    balance += amount;
    updateBalance();
    amountInput.value = "";
}

function withdraw() {
    const amount = Number(amountInput.value);
    errorText.textContent = "";

    if (amount <= 0 || isNaN(amount)) {
        errorText.textContent = "Invalid amount!";
        return;
    }

    if (amount > balance) {
        errorText.textContent = "Insufficient balance!";
        return;
    }

    balance -= amount;
    updateBalance();
    amountInput.value = "";
}
