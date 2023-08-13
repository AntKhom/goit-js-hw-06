const formInputEl = document.querySelector('#validation-input');

const handlerInputValidation = (event) => {
    console.log(event.currentTarget.value.length); 
    console.log(formInputEl.dataset.length);
    let a = event.currentTarget.value.length;
    const b = formInputEl.dataset.length;
    if (a == b) {
        formInputEl.classList.remove('invalid'); 
        formInputEl.classList.add('valid'); 
    } else {
        formInputEl.classList.remove('valid'); 
        formInputEl.classList.add('invalid');  
    }
}

formInputEl.addEventListener('blur',handlerInputValidation)