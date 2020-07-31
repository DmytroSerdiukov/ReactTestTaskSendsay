const Required = 'Field is Required'
const maxLengthWarn = `Max length is `
const emailWarn = 'Invalid email address'
export const maxLength = value => value
// const maxLength10 = maxLength(10)
const maxLength30 = maxLength(30)

// export const yourNameIsValid = yourname => {
//     if(!yourname) yourname = Required
//     else if (yourname.length > maxLength30) yourname = maxLengthWarn + maxLength30
//     return yourname
// }
export const required = fieldValue => fieldValue ? undefined : Required

export const emailIsValid = (yourEmail) => !yourEmail ? Required : !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(yourEmail ) ? emailWarn : undefined
    // else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(yourEmail )) yourEmail = emailWarn
    // return yourEmail
// }

// export const emailTest = (youremail, errors) => !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(youremail) ? errors.youremail = emailWarn : true

// export const nameIsValid = name => !name ? Required : name.length > undefined
    // if(!name) name = Required
    // else if (name.length > maxLength30) name = maxLengthWarn + maxLength30
    // // return name

// export const validate = props => {
//     const {yourname, youremail, name, email} = props
//     const errors = {}
//     yourNameIsValid(yourname, errors)
//     yourEmailIsValid(youremail, errors)

//     // if(!yourname) errors.yourname = Required
//     // else if (yourname.length > maxLength30) errors.yourname = maxLengthWarn + maxLength30

//     // if (!youremail) errors.youremail = Required
//     // else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(youremail)) errors.youremail = emailWarn

//     // if(!name) errors.name = Required
//     // else if (name.length > maxLength30) errors.name = maxLengthWarn + maxLength30

//     if (!email) errors.email = Required
//     else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(email)) errors.email = emailWarn

//     // if(!header) errors.header = Required
//     // else if (header.length > maxLength(60)) errors.header = maxLengthWarn

//     // if(!message) errors.message = Required
//     // else if (message.length > maxLength(730)) errors.message = maxLengthWarn
    
//     return errors
// }