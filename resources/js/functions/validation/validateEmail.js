let validateEmail = function (email) {
    if (typeof email === "string") {
        const re = /\S+@\S+\.\S+/

        if (re.test(email)) {
            return true
        } else {
            return 'Введите действующий почтовый адрес.'
        }
    }
}


export {validateEmail}
