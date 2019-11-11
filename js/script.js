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
    el.className = 'alert alert-dark';
    form.after(el);
    removeElement(el, 1500);
}

function removeElement(el, timeout = 1500) {
    setTimeout(() => {
        el.remove();
    }, timeout)
}




