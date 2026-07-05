// Set the birthday date
const birthdayDate = new Date('2026-08-11').getTime();

function updateCountdown() {
    const now = new Date().getTime();
    const distance = birthdayDate - now;

    // Calculate time units
    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    // Update the countdown display
    document.getElementById('days').textContent = String(days).padStart(2, '0');
    document.getElementById('hours').textContent = String(hours).padStart(2, '0');
    document.getElementById('minutes').textContent = String(minutes).padStart(2, '0');
    document.getElementById('seconds').textContent = String(seconds).padStart(2, '0');

    // If the date has passed
    if (distance < 0) {
        document.getElementById('days').textContent = '00';
        document.getElementById('hours').textContent = '00';
        document.getElementById('minutes').textContent = '00';
        document.getElementById('seconds').textContent = '00';
        document.querySelector('.message').textContent = 'Happy Birthday Shanzay! 🎉🎂';
    }
}

// Update countdown every second
updateCountdown();
setInterval(updateCountdown, 1000);

// Gallery functionality - to add images later
document.querySelectorAll('.photo-placeholder').forEach((placeholder, index) => {
    placeholder.addEventListener('click', function() {
        const input = document.createElement('input');
        input.type = 'file';
        input.accept = 'image/*';
        input.onchange = (e) => {
            const file = e.target.files[0];
            const reader = new FileReader();
            reader.onload = (event) => {
                placeholder.innerHTML = `<img src="${event.target.result}" alt="Birthday photo ${index + 1}">`;
            };
            reader.readAsDataURL(file);
        };
        input.click();
    });
});