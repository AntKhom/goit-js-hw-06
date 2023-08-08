const catEl = document.querySelectorAll('.item');
console.log('Number of categories:', catEl.length);
catEl.forEach(item => {
    console.log('Category:', item.querySelector('h2').textContent);
    console.log('Elements:', item.querySelectorAll('li').length);
});
