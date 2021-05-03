function switchTheme() {
    if (document.body.classList.contains('night')) {
        document.body.classList.remove('night');

        const avatarPath = 'assets/images/avatar.svg';
        let avatarBlock = document.getElementsByClassName('avatar')[0];
        avatarBlock.data = avatarPath;

        document.body.className = 'day';
    } else {
        const avatarPath = 'assets/images/avatarNight.svg';
        let avatarBlock = document.getElementsByClassName('avatar')[0];
        avatarBlock.data = avatarPath;

        document.body.className = 'night';
    }
}

function scrollUp() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth',
    });
}
