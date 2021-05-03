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

async function trumpize() {
    function delay(ms) {
        return new Promise((resolve) => {
            setTimeout(() => {
                resolve();
            }, ms);
        });
    }

    const audio = new Audio('assets/audio/Donald Trump rap.mp3');
    audio.currentTime = 6;

    let trumpBlock = document.createElement('div');
    trumpBlock.style.top = 0;
    trumpBlock.style.bottom = 0;
    trumpBlock.style.left = 0;
    trumpBlock.style.right = 0;
    trumpBlock.style.position = 'fixed';
    trumpBlock.style.background = '#fff';
    trumpBlock.style['z-index'] = '9999';
    trumpBlock.style['font-family'] = 'serif';
    trumpBlock.style['font-size'] = '200px';
    trumpBlock.style.display = 'flex';
    trumpBlock.style.overflow = 'hidden';

    const messageBlock = document.createElement('span');
    messageBlock.style['white-space'] = 'nowrap';
    messageBlock.style.margin = 'auto';
    messageBlock.style['line-height'] = '1';
    trumpBlock.appendChild(messageBlock);

    const endBlock = document.createElement('span');
    endBlock.innerHTML = '&#128074;';
    endBlock.style.margin = 'auto';
    endBlock.style['font-size'] = '100px';
    endBlock.style.transition = '0.5s';

    document.body.appendChild(trumpBlock);

    function printMessage(message) {
        return new Promise((resolve) => {
            const printMessageQueue = [];

            function printChar(i) {
                return new Promise((resolve) => {
                    setTimeout(() => {
                        messageBlock.innerHTML += message[i];
                        trumpBlock.scrollTo({
                            left: i * 80,
                        });
                        resolve();
                    }, i * 200);
                });
            }

            for (let i = 0; i < message.length; i++)
                printMessageQueue.push(printChar(i));

            Promise.all(printMessageQueue).then(resolve);
        });
    }

    function printEnd() {
        trumpBlock.children[0].remove();
        trumpBlock.appendChild(endBlock);
        setTimeout(() => {
            endBlock.style.transform = 'scale(5)';
        }, 0);
    }

    const message = 'Truuuuuuummmpum pum pum...';

    audio.play();

    printMessage(message)
        .then(() => delay(500))
        .then(printEnd)
        .then(() => delay(500))
        .then(() => {
            trumpBlock.remove();
        });
}
