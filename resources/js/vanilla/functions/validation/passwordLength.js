let passwordLength = function (str, length) {
    if(str.length < length) {
        return `Пароль должен быть не менее ${length} сиволов.`
    } else {
        return true;
    }
}

export {passwordLength}
