const form = document.getElementById('buy');
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
    el.innerHTML = 'Data was saved. Thank you!';
    el.className = 'alert alert-success';
    form.after(el);
    removeElement(el, 5000);
}
function removeElement(el, timeout = 3000) {
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



