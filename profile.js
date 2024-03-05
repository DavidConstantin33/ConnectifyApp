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

const loggedInUser = JSON.parse(localStorage.getItem('loggedInUser'));
const profileUsername = document.getElementById('profileUsername');
const profileBtn = document.getElementById('toProfile');

if (loggedInUser) {


    const loggedUser = function (user) {
        accPhoto.src = `${user.profilePic}`;
        inputPhoto.src = `${user.profilePic}`
        profileUsername.textContent = `${user.username}`;
    };


}