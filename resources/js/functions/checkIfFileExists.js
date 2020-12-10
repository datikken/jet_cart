function checkFileExist(url) {
    if (!url) return 'Please provide a file url';

    let http = new XMLHttpRequest();

    http.open('HEAD', url, false);
    http.send();

    if (http.status === 200) {
        return true;
    }

    return false;
}

export {checkFileExist};
