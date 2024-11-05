export const LoginValidation = (name, email, password, isSignInForm) => {
    const isEmailValid = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(email);
    const isPasswordValid = /^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{8,}$/.test(password);
    if(!isSignInForm){
        if(name == "") return {field: "name", message: "Name is not valid"}
    }
    if (!isEmailValid) return {field: "email", message: "Email is not Valid"}
    if(!isPasswordValid) return {field: "password", message: "Password is not valid"}
    
    return null
}