// console.log('hiii');

const params = new URLSearchParams(window.location.search);

console.log(params.get('firstName'));

const firstNameEl = document.getElementById('first-name');

firstNameEl.textContent = params.get('firstName');