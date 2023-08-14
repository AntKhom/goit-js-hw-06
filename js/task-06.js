const formInputEl = document.querySelector('#validation-input');

const handlerInputValidation = (event) => {
    console.log(event.currentTarget.value.length); 
    console.log(formInputEl.dataset.length);
    //Зачем проверять, т.к. понятно что length возвращает number))
    //преобразуем первое значение в строковое
    let currentElementLength = event.currentTarget.value.trim().length + ''; //так
    //let currentElementLength = String(event.currentTarget.value.trim().length); //или так
    const limitElementLength = formInputEl.dataset.length;
    if (currentElementLength === limitElementLength) {
        formInputEl.classList.remove('invalid'); 
        formInputEl.classList.add('valid'); 
    } else {
        formInputEl.classList.remove('valid'); 
        formInputEl.classList.add('invalid');  
    }
}

formInputEl.addEventListener('blur',handlerInputValidation)