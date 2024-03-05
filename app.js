const acc1 = {
    name: 'Constantin David',
    profilePic: 'yeCover.jpg',
    username: 'DavidBoss1',
    password: '1',
}

const postInput = document.getElementById('postInput');
const postBtn = document.getElementById('postStatus');
const accPhoto = document.getElementById('usrPhoto');
const inputPhoto = document.getElementById('inputPhoto');
////////////////////////////Post Box Items////////////////////////
const postBox = document.querySelector('.post-box');
const profilePic = document.getElementById('profilePic');
const postUsername = document.getElementById('username');
const postText = document.getElementById('postText');
/////////////////////////////////////////////////////////////////
//////////////////////////Functions//////////////////////////////
const loggedUser = function(user) {
    accPhoto.src = `${user.profilePic}`;
    inputPhoto.src = `${user.profilePic}`;
}

const showUserInfo = function(user) {
    profilePic.src = `${user.profilePic}`;
    postUsername.textContent = `${user.username}`;
}


////////////////////////////////////////////////////////////////
postBtn.addEventListener('click', function () {

    console.log('click');
    showUserInfo(acc1);
    loggedUser(acc1);
    // Clone the template post box
    const newPostBox = postBox.cloneNode(true);

    // Update content in the new post box
    newPostBox.querySelector('#postText').innerText = postInput.value;

    // Append the new post box to the post area
    document.querySelector('.post-area').appendChild(newPostBox);

    // Reset the input value
    postInput.value = "What is on your mind?";
});

