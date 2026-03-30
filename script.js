const hamburger = document.getElementById('hamburger');
const sidebar   = document.getElementById('sidebar');
const overlay   = document.getElementById('overlay');

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('open');
    sidebar.classList.toggle('open');
    overlay.classList.toggle('show');
});

overlay.addEventListener('click', () => {
    hamburger.classList.remove('open');
    sidebar.classList.remove('open');
    overlay.classList.remove('show');
});

document.querySelectorAll('.sidebar-nav a').forEach(link => {
    link.addEventListener('click', () => {
        hamburger.classList.remove('open');
        sidebar.classList.remove('open');
        overlay.classList.remove('show');
    });
});

const tyEl = document.getElementById('typewriter');
if (tyEl) {
    const words = ['Gamer', 'Developer', 'Rider', 'Freelancer'];
    let wi = 0, ci = 0, deleting = false;

    function type() {
        const word = words[wi];
        tyEl.textContent = deleting ? word.slice(0, ci--) : word.slice(0, ci++);

        let delay = deleting ? 60 : 120;

        if (!deleting && ci > word.length) {
            delay = 1600;
            deleting = true;
        } else if (deleting && ci < 0) {
            deleting = false;
            wi = (wi + 1) % words.length;
            ci = 0;
            delay = 400;
        }

        setTimeout(type, delay);
    }

    type();
}
