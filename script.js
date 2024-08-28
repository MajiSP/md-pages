document.addEventListener('DOMContentLoaded', () => {
    const countdownItems = document.querySelectorAll('.countdown-item');

    countdownItems.forEach(item => {
        const header = item.querySelector('.countdown-header');
        header.addEventListener('click', () => {
            item.classList.toggle('active');
        });

        const timerElement = item.querySelector('.countdown-timer');
        const targetDate = new Date(timerElement.dataset.target).getTime();

        let interval;

        const updateTimer = () => {
            const now = new Date().getTime();
            const distance = targetDate - now;

            const days = Math.floor(distance / (1000 * 60 * 60 * 24));
            const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
            const seconds = Math.floor((distance % (1000 * 60)) / 1000);

            timerElement.innerHTML = `${days}d ${hours}h ${minutes}m ${seconds}s`;

            if (distance < 30 * 60 * 1000 && distance > 0) {
                header.classList.add('urgent');
            } else {
                header.classList.remove('urgent');
            }

            if (distance < 0) {
                clearInterval(interval);
                timerElement.innerHTML = "EXPIRED";
                header.classList.remove('urgent');
            }
        };

        updateTimer();
        interval = setInterval(updateTimer, 1000);
    });
});