const acc1 = {
    name: 'Constantin David',
    profilePic: 'yeCover.jpg',
    username: '11',
    password: '1',
};

const acc2 = {
    name: 'Pana Cristina',
    profilePic: 'catpng.png',
    username: 'CrissT',
    password: 'motonel123',
}

const accs = {
    acc1,
    acc2,
}

const loginBtn = document.getElementById('loginBtn');
const usernameInput = document.getElementById('username');
const passwordInput = document.getElementById('password');

const login = function () {
    const loggedInUser = Object.values(accs).find(acc => acc.username === usernameInput.value && acc.password === passwordInput.value);
    if (loggedInUser) {

        localStorage.setItem('loggedInUser', JSON.stringify(loggedInUser));
        window.location.href = 'index.html';
    }
}

loginBtn.addEventListener('click', function (e) {
    e.preventDefault();
    console.log('click');
    login();
});