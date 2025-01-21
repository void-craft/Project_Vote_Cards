const voteButtons = [
    document.getElementById('voteButton1'),
    document.getElementById('voteButton2'),
    document.getElementById('voteButton3')
];

voteButtons.forEach(button => {
    button.addEventListener('click', function () {
        if (this.textContent === 'Voted') {
            voteButtons.forEach(btn => {
                btn.textContent = 'Vote';
                btn.style.backgroundColor = 'var(--primary-color)';
                btn.disabled = false;
                btn.classList.remove('clicked');
            });
        } else {
            voteButtons.forEach(btn => {
                if (btn === this) {
                    btn.textContent = 'Voted';
                    btn.style.backgroundColor = 'var(--secondary-color)';
                    btn.disabled = false;
                    btn.classList.add('clicked');
                } else {
                    btn.textContent = 'Vote';
                    btn.style.backgroundColor = 'var(--tertiary-color)';
                    btn.disabled = true;
                    btn.classList.remove('clicked');
                }
            });
        }
    });
});

// JavaScript for Dark Mode Toggle
const darkModeToggle = document.getElementById('darkModeToggle');
const body = document.body;

darkModeToggle.addEventListener('click', () => {
    body.classList.toggle('dark-mode');
    document.documentElement.classList.toggle('dark-mode');

    
    if (body.classList.contains('dark-mode')) {
        darkModeToggle.textContent = '☀️';
        darkModeToggle.setAttribute('aria-label', 'Switch to Light Mode');
    } else {
        darkModeToggle.textContent = '🌙';
        darkModeToggle.setAttribute('aria-label', 'Switch to Dark Mode');
    }
});
