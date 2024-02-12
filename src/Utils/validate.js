const checkValidData = (email, password) => {
    const isValidEmail = /^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})$/.test(email);
    const isvalidPassword = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(password);

    if(!isValidEmail) return "Email Id is not Vallid" ;
    if(!isvalidPassword) return "passWord is not valid";

    return null;
}

export default checkValidData;