let showNotification = function (state, msg, type) {
    state.notParams.status = type;
    state.notParams.message = msg;

    // let notification = new Notifications(state.notParams);
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
