const buttonHeight = 50;
const buttonWidth = 150;

const maxWidth = window.innerWidth - buttonWidth;
const maxHeight = window.innerHeight - buttonHeight;

window.addEventListener('DOMContentLoaded', () => {
    const button = document.querySelector('.nobutton');
    const yesButton = document.getElementById('yes');
    button.addEventListener('click', () => {
        alert("Я не буду с тобой дружить, 🙁")
    });

    button.addEventListener('mouseover', () => {
        button.style.left = Math.floor(Math.random() * (maxWidth + 1)) + 'px';
        button.style.top = Math.floor(Math.random() * (maxHeight + 1)) + 'px';
    });
    yesButton.addEventListener('click', () => {
        alert("Я надеюсь у меня получилось спрятать кнопку Нет)");
        window.location.href = 'page.html';
    });
});


