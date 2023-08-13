const formInputEl = document.querySelector('#name-input');
const formOutputEl = document.querySelector('#name-output');



const inputHandler = (event) => {
    console.log(event.currentTarget.value)
    formOutputEl.textContent = 'Anonymous';  
    if (event.currentTarget.value != '') {
        formOutputEl.textContent = event.currentTarget.value;
    };   
};

formInputEl.addEventListener('input', inputHandler);

