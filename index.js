const nameInput = document.getElementById('name-input');
const emailInput = document.getElementById('email-input');

const name = document.getElementById('name');
const email = document.getElementById('email');

if (nameInput.value !== "") {
    name.innerText = nameInput.value;
}
if (emailInput.value !== "") {
    email.innerText = emailInput.value;
}

nameInput.addEventListener('input', (e) => {
    name.innerText = e.target.value;
})

emailInput.addEventListener('input', (e) => {
    email.innerText = e.target.value;
})