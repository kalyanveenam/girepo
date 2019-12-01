
console.log('hi,....');
const form = document.querySelector('form');
const input = document.querySelector('input');
const para = document.querySelector('#name');
form.addEventListener('submit', (e) => {
    e.preventDefault();
    console.log('submitted')
    console.log("input->" + input.value)
    fetch('/getRepo?repName=' + input.value + '').then((response) => {
        response.json().then((data) => {
            console.log("from script->" + data.name)
            para.textContent = data.name
        })

    })

})