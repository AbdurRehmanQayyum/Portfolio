const resumeBtns = document.querySelectorAll('.resume-btn');

resumeBtns.forEach((Btn, idx) => {
    Btn.addEventListner('click', () => {
        btn.classList.remove('active');
    });
    btn.classList.add('active');
});