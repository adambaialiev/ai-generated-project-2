document.addEventListener('DOMContentLoaded', () => {
    const counterDisplay = document.getElementById('counter-display');
    const increaseBtn = document.getElementById('increase-btn');
    let counter = 0;

    increaseBtn.addEventListener('click', () => {
        counter++;
        counterDisplay.textContent = counter;
    });
});