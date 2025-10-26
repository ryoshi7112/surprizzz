function dates() {
    var x = new Date("August 18 2025 12:30:00");
    var y = new Date();
    let seconds = Math.abs(x - y)/1000;

    var day = seconds / (24 * 3600);

    hh = seconds % (24 * 3600);
    var hour = hh / 3600;
  
    hh %= 3600;
    var minutes = hh / 60 ;
  
    hh %= 60;
    var rseconds = hh;

    document.getElementById('gün').innerHTML = parseInt(day);
    document.getElementById('saat').innerHTML = parseInt(hour);
    document.getElementById('dakika').innerHTML = parseInt(minutes);
    document.getElementById('saniye').innerHTML = parseInt(rseconds);
}

setInterval(dates, 1000);

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

