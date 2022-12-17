// eslint-disable-next-line @typescript-eslint/ban-ts-comment
/*@ts-ignore*/
import validator from 'validator';
/** validate email using validator.js each time you enter something in a the email input*/
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
/*@ts-ignore*/
export const validateEmail =(value,/*options={}*/)=>{
  let isEmail=false;
  if(!validator.isEmail(value)){
    // what to do if not email
    // emailPrompt.innerHTML='✘';
    // emailPrompt.classList.add('error');
    isEmail=false;
  }else{
    // emailPrompt.innerHTML='✔';
    // emailPrompt.classList.remove('error');
    isEmail=true;
  }
  return isEmail;
};


/** validate password using regular expressions */
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
/*@ts-ignore*/
export const validatePassword =(value, /*options={}*/): boolean=>{
  let hasUppercase=false;
  let hasLowercase=false;
  let hasNumber=false;
  let hasEightPlusChars=false;
  if(!/[A-Z]/.test(value)){
    // // what to do if not email
    // isuppercasePrompt.innerHTML='✘';
    // isuppercasePrompt.classList.add('error');
    hasUppercase=false;
  }else{
    // isuppercasePrompt.innerHTML='✔';
    // isuppercasePrompt.classList.remove('error');
    hasUppercase=true;
  }

  if(!/[a-z]/.test(value)){
    // what to do if not email
    // islowercasePrompt.innerHTML='✘';
    // islowercasePrompt.classList.add('error');
    hasLowercase=false;
  }else{
    // islowercasePrompt.innerHTML='✔';
    // islowercasePrompt.classList.remove('error');
    hasLowercase=true;
  }

  if(value.length<8){
    // // what to do if not email
    // eightcharPrompt.innerHTML='✘';
    // eightcharPrompt.classList.add('error');
    hasEightPlusChars=false;
  }else{
    // eightcharPrompt.innerHTML='✔';
    // eightcharPrompt.classList.remove('error');
    hasEightPlusChars=true;
  }

  if(!/[0-9]/.test(value)){
    // what to do if not email
    // numberPrompt.innerHTML='✘';
    // numberPrompt.classList.add('error');
    hasNumber=false;
  }else{
    // numberPrompt.innerHTML='✔';
    // numberPrompt.classList.remove('error');
    hasNumber=true;
  }

  return hasNumber && hasEightPlusChars && hasLowercase && hasUppercase;
};
