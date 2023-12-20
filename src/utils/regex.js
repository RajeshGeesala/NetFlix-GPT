export const formValidation = (email , password )=> {
    const validEmail = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(email)
    const validPassword = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/.test(password) 
    if (!validEmail)  return("Please Enter Valid Email")
    if (!validPassword) return  (<small>Password Should contain at least one lowercase letter,one uppercase letter , one digit , one special character, Minimum length of 8 characters</small>)
    return alert("logged in") ;
}

// ("At least one lowercase letter ,At least one uppercase letter , At least one digit ,At least one special character from the set [@$!%*?&], Minimum length of 8 characters") 