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

const postInput = document.getElementById('postInput');
const postBtn = document.getElementById('postStatus');
const accPhoto = document.getElementById('usrPhoto');
const inputPhoto = document.getElementById('inputPhoto');
const postBox = document.querySelector('.post-box');
const profilePic = document.getElementById('profilePic');
const postUsername = document.getElementById('username');
const postText = document.getElementById('postText');
const delPost = document.getElementById('delPost');
const modalWindow = document.querySelector('.modal-window');
const yesDel = document.getElementById('yesDel');
const closeDel = document.getElementById('closeDel');
const postArea = document.querySelector('.post-area');
const postBoxTemplate = document.querySelector('.post-box.template');
const toggleDarkModeButton = document.getElementById('darkMode');
const body = document.body;
const loggedInUser = JSON.parse(localStorage.getItem('loggedInUser'));
const profileUsername = document.getElementById('profileUsername');
const profileBtn = document.getElementById('toProfile');

if (loggedInUser) {


const loggedUser = function (user) {
    accPhoto.src = `${user.profilePic}`;
    inputPhoto.src = `${user.profilePic}`;
};

const toggleDarkMode = () => {
    body.classList.toggle('dark-mode');
};

const showUserInfo = function (user) {
    profilePic.src = `${user.profilePic}`;
    postUsername.textContent = `${user.username}`;
};

const createNewPost = function (text, user) {
    const newPostBox = postBoxTemplate.cloneNode(true);
    newPostBox.querySelector('#postText').innerText = text;
    newPostBox.classList.remove('template')
    showUserInfo(user, newPostBox);
    postArea.appendChild(newPostBox);
    postInput.value = '';
};

///////////////////////////////////////////
toggleDarkModeButton.addEventListener('click', toggleDarkMode);

    profileBtn.addEventListener('click', function (e) {
        e.preventDefault();
        window.location.href = 'profile.html';
    })

postBtn.addEventListener('click', function () {
        showUserInfo(loggedInUser);
        loggedUser(loggedInUser);
        createNewPost(postInput.value, loggedInUser);
    });

delPost.addEventListener('click', function () {
    modalWindow.style.display = 'flex';
});

closeDel.addEventListener('click', function () {
    modalWindow.style.display = 'none';
})

postArea.addEventListener('click', function (event) {
    const deleteButton = event.target.closest('#delPost');

    if (deleteButton) {

        modalWindow.style.display = 'flex';


        const postBox = deleteButton.closest('.post-box');
        yesDel.onclick = function () {

            postBox.remove();
            modalWindow.style.display = 'none';
        };
    }
});

postArea.addEventListener('click', function (event) {
    const postBox = event.target.closest('.post-box');

    document.querySelectorAll('.post-box').forEach(post => post.classList.remove('selected'));

    if (postBox) {
        postBox.classList.add('selected');
    }
});
    showUserInfo(loggedInUser);
    loggedUser(loggedInUser);
}



