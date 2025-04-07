export const checkValidation = (email, password, isLogin, name = '') => {
  // const isEmailValid = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email);
  const isEmailValid = /^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})$/.test(email);
  const isPasswordValid = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(password);
  
  if (!isLogin) {
    const isNamevalid = /(^[A-Za-z]{3,16})([ ]{0,1})([A-Za-z]{3,16})?([ ]{0,1})?([A-Za-z]{3,16})?([ ]{0,1})?([A-Za-z]{3,16})/.test(name);
    if(!isNamevalid) return "Name is not valid";
  }
  
  if(!isEmailValid) return "Email is not valid";
  if(!isPasswordValid) return "Password is not valid";
  
   
  return null;
}