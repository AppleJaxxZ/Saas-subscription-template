import bcrypt from 'bcrypt'

export const hashPassword = password => {
    return new Promise((resolve, reject) => {
        bcrypt.genSalt(12, (err, salt) => {
            if (err) {
                reject(err)

            }
            bcrypt.hash(password, salt, (err, hash) => {
                if (err) {
                    reject(err)
                }
                resolve(hash)
            })
        })
    })
}

export const comparePassword = (password, hashed) => {
    return bcrypt.compare(password, hashed) //true
}


export const validateDate = (testdate) => {
    var date_regex = /^(0[1-9]|1[0-2])\/(0[1-9]|1\d|2\d|3[01])\/(19|20)\d{2}$/;
    return date_regex.test(testdate);
}

export const validatePassword = (password) => {
    const pswd_regex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9]).{8,1024}$/;
    return pswd_regex.test(password)
}
