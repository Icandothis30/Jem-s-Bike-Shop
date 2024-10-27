function showLogin() {
    document.querySelector('.form-box.login').classList.add('active');
    document.querySelector('.form-box.register').classList.remove('active');
}

function showRegister() {
    document.querySelector('.form-box.register').classList.add('active');
    document.querySelector('.form-box.login').classList.remove('active');
}

