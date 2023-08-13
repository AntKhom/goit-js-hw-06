const formInputEl = document.querySelector('#font-size-control');
const formTextEl = document.querySelectorAll('#text');

const changeFontSizeHandler = (e) => {
    let textSize = e.currentTarget.value;
    console.log(e.currentTarget.value);
    console.log(textSize);
    formTextEl.style.fontSize = `${textSize}px`;
    
}

formInputEl.addEventListener('input',changeFontSizeHandler)