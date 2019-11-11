const form = document.getElementById('buy');
console.log(form);
const userInput = {};
form.addEventListener('submit', (event) => {
    userInput.name = form[0].value;
    userInput.email = form[1].value;
    userInput.phone = form[2].value;
    console.log(userInput);
    form.reset();
    addSuccessMsg();
    event.preventDefault();
});

function addSuccessMsg() {
    let el = document.createElement('div');
    el.innerHTML = 'Спасибо за заявку! Мы с вами свяжемся в течение 30 минут.';
    el.className = 'alert alert-dark';
    form.after(el);
    removeElement(el, 1500);
}

function removeElement(el, timeout = 1500) {
    setTimeout(() => {
        el.remove();
    }, timeout)
}
const toastMessage = document.getElementById('toast-message');

for (let item of document.querySelectorAll('.form-control')) {

    item.addEventListener('focus', ()=> {
        toastMessage.innerHTML = item.dataset.rule;
        toastMessage.style.opacity = '1';
    });

    item.addEventListener('focusout', ()=> {
        toastMessage.style.opacity = '0';
    });
}



