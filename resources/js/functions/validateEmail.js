let validateEmail = function (email) {
    if (typeof email === "string") {
        const re = /\S+@\S+\.\S+/

        if (re.test(field.value)) {
            return true
        }
    }
}


export {validateEmail}
