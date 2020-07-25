export const maxLength = value => value

// export const required = value => {
//     if (value) return undefined
//     return 'Field is required'
// }
const Required = 'Field is Required'
const maxLengthWarn = `So much symbols`
const emailWarn = 'Invalid email address'

export const validate = ({yourname, youremail, name, email, header, message}) => {
    const errors = {}
    if(!yourname) errors.yourname = Required
    else if (yourname.length > maxLength(10)) errors.yourname = maxLengthWarn

    if (!youremail) errors.youremail = Required
    else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(youremail)) errors.youremail = emailWarn

    if(!name) errors.name = Required
    else if (name.length > maxLength(30)) errors.name = maxLengthWarn

    if (!email) errors.email = Required
    else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(email)) errors.email = emailWarn

    if(!header) errors.header = Required
    else if (header.length > maxLength(60)) errors.header = maxLengthWarn

    if(!message) errors.message = Required
    else if (message.length > maxLength(730)) errors.message = maxLengthWarn
    
    return errors
}