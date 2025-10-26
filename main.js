function updateCounter() {
    const target = new Date("August 18 2025 12:30:00");
    const now = new Date();

    let seconds = Math.abs(target - now) / 1000;

    const days = Math.floor(seconds / (24 * 3600));
    seconds %= 24 * 3600;

    const hours = Math.floor(seconds / 3600);
    seconds %= 3600;

    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = Math.floor(seconds % 60);

    document.getElementById('gun').textContent = String(days).padStart(2, "0");
    document.getElementById('saat').textContent = String(hours).padStart(2, "0");
    document.getElementById('dakika').textContent = String(minutes).padStart(2, "0");
    document.getElementById('saniye').textContent = String(remainingSeconds).padStart(2, "0");
}

updateCounter();
setInterval(updateCounter, 1000);

function cardSelected(selectedCard) {
    const cards = document.querySelectorAll('.card');
    cards.forEach(card => {
        if (card === selectedCard) {
            card.classList.remove('fade-out');
            card.classList.add('show');
        } else {
            card.classList.add('fade-out');
            card.classList.remove('show');
        }
    });
}
