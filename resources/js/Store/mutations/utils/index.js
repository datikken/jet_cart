import Notification from '@/vanilla/classes/Notification';

let showNotification = function (state, {msg, type}) {
    let notParams = {
        status: type,
        pos: 'top-center',
        timeout: 2000,
        message: msg
    }

    let notification = new Notification(notParams, msg);

    notification.show();
}

let blockFormInputs = function (state, el) {
    let inputs = el.querySelectorAll('input');

    inputs && inputs.forEach((npt) => {
        npt.value = ''
        npt.setAttribute('disabled', '')
    })
}

export {
    showNotification,
    blockFormInputs
};
