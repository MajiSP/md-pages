document.addEventListener('DOMContentLoaded', () => {
    const faqItems = document.querySelectorAll('.faq-item');
    const easterEgg = document.getElementById('easter-egg');
    let easterEggClicks = 0;

    faqItems.forEach(item => {
        const header = item.querySelector('.faq-header');
        const content = item.querySelector('.faq-content');
        
        header.addEventListener('click', () => {
            const isActive = item.classList.contains('active');
            
            faqItems.forEach(otherItem => {
                if (otherItem !== item && otherItem.classList.contains('active')) {
                    toggleItem(otherItem, false);
                }
            });
            toggleItem(item, !isActive);
        });
    });

    function toggleItem(item, open) {
        const content = item.querySelector('.faq-content');
        
        if (open) {
            item.classList.add('active');
            content.style.maxHeight = content.scrollHeight + 'px';
            content.style.opacity = '1';
        } else {
            content.style.maxHeight = '0px';
            content.style.opacity = '0';
            item.classList.remove('active');
        }
    }

    document.querySelector('h1').addEventListener('dblclick', function() {
        this.classList.toggle('rainbow');
    });

    easterEgg.addEventListener('click', () => {
        easterEggClicks++;
        if (easterEggClicks === 5) {
            for (let i = 0; i < 20; i++) {
                setTimeout(() => {
                    const rabbit = document.createElement('div');
                    rabbit.textContent = '🐰';
                    rabbit.style.position = 'fixed';
                    rabbit.style.left = `${Math.random() * 100}vw`;
                    rabbit.style.top = `${Math.random() * 100}vh`;
                    rabbit.style.fontSize = '2rem';
                    rabbit.style.transition = 'all 0.5s ease';
                    document.body.appendChild(rabbit);
                    setTimeout(() => rabbit.remove(), 5000);
                }, i * 200);
            }
            easterEggClicks = 0;
        }
    });

    const konamiCode = ['ArrowUp', 'ArrowUp', 'ArrowDown', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 'ArrowLeft', 'ArrowRight', 'b', 'a'];
    let konamiIndex = 0;

    document.addEventListener('keydown', (e) => {
        if (e.key === konamiCode[konamiIndex]) {
            konamiIndex++;
            if (konamiIndex === konamiCode.length) {
                alert("Read the fucking readme and stop looking for easter eggs!");
                konamiIndex = 0;
            }
        } else {
            konamiIndex = 0;
        }
    });
});
