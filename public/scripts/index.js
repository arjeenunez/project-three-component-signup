document.querySelector('form').addEventListener('submit', evt => {
    evt.preventDefault();
    const inputs = document.querySelectorAll('input');
    const spans = document.querySelectorAll('.text-error');
    const imgs = document.querySelectorAll('.img-error');
    inputs.forEach((input, i) => {
        const isEmpty = input.value === '';
        const isName = input.dataset.key.includes('name');
        const isEmail = input.dataset.key === 'Email';
        const isPassword = input.dataset.key === 'Password';
        const isEmailCorrect = input.value.includes('.com') && input.value.includes('@');
        const isCorrectLength = input.value.length < 8;

        if (isEmpty) {
            input.classList.toggle('border-error');
            spans[i].classList.toggle('hidden');
            imgs[i].classList.toggle('hidden');
            return;
        }
        if (isEmail && !isEmailCorrect) {
            input.classList.toggle('border-error');
            spans[i].classList.toggle('hidden');
            imgs[i].classList.toggle('hidden');
            return;
        }
        if (isPassword && !isCorrectLength) {
            input.classList.toggle('border-error');
            spans[i].classList.toggle('hidden');
            imgs[i].classList.toggle('hidden');
        }
    });
});
