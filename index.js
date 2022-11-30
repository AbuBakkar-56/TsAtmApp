var getUserId = document.querySelector('.userid');
var getuserPin = document.querySelector('.userpin');
var submitBtn = document.querySelector('.submitBtn');
var body = document.querySelector('body');
var loginBox = document.querySelector('.login-box');
var atm = document.querySelector('.atm-machine');
var heading = document.querySelector('h1');
var user1 = {
    name: 'Abu Bakkar',
    userId: '34px',
    pin: 1111
};
var user2 = {
    name: 'Arslan',
    userId: '45pc',
    pin: 2222
};
var user3 = {
    name: 'Zain',
    userId: '78pv',
    pin: 3333
};
var user4 = {
    name: 'Hassan',
    userId: '67vc',
    pin: 4444
};
var user5 = {
    name: 'Noman',
    userId: '90we',
    pin: 5555
};
var user6 = {
    name: 'Ali',
    userId: '61bn',
    pin: 6666
};
var user7 = {
    name: 'Usman',
    userId: '90po',
    pin: 7777
};
var user8 = {
    name: 'Haris',
    userId: '89nv',
    pin: 8888
};
var user9 = {
    name: 'Usman',
    userId: '74lk',
    pin: 9999
};
var user10 = {
    name: 'Usman',
    userId: '12an',
    pin: 1010
};
var users = [user1, user2, user3, user4, user5, user6, user7, user8, user9, user10];
submitBtn.addEventListener('click', function (e) {
    e.preventDefault();
    var getUserPinValue = +(getuserPin.value);
    var getUserIdValue = getUserId.value;
    var findUserPin = users.find(function (f) { return f.pin === getUserPinValue; });
    var findUserId = users.find(function (f) { return f.userId === getUserIdValue; });
    if ((findUserId === null || findUserId === void 0 ? void 0 : findUserId.userId) && (findUserPin === null || findUserPin === void 0 ? void 0 : findUserPin.pin)) {
        body.style.background = '#16453e';
        loginBox.classList.add('hidden');
        atm.classList.remove('hidden');
        heading.innerText = "Welcome Back Mr.".concat(findUserPin.name);
    }
    else {
        heading.innerText = "Invalid userId or Pin";
    }
});
