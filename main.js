
const form = document.querySelector("#sign-up");
const userName = document.querySelector("#username");
const perNumber = document.querySelector('#personalnumber');
const mobileNumber = document.querySelector('#mobilenumber');
const email = document.querySelector('#email');
const password =document.querySelector('#passsworduser');
const textArea = document.querySelector('#empty-field');




const errorName = document.querySelector('#username-error');
const errorPerNumb = document.querySelector('#number-error');
const errorMobile = document.querySelector('#mobile-error');
const errorEmail = document.querySelector('#email-error');
const errorPass = document.querySelector('#password-error');
const errorArea =document.querySelector('#empty-field');

const modal = document.querySelector('#sign-in');
const closeModal = document.querySelector('.modal-btn');

let isUserNameValid = false;
let isEmailValid = false;
let isPasswordValid = false;
let isValidPnum = false;
let isValidMobile = false;



// function textAreaFunction(){
//     if(textArea.value.length > 50){
//         errorArea.innerHTML="Too long"
//         textArea.classList.remove("correct");
//         textArea.classList.add("error");

//     } else {
//         errorArea.innerHTML=" ";
//         textArea.classList.remove("error");
//         textArea.classList.add("correct");
//     }
// }

// ar mushaobs textareaze ferebi 

function personalNum(){

    if(perNumber.value.length==10){
        errorPerNumb.innerHTML=""
        perNumber.classList.remove("error");
        perNumber.classList.add("correct");
       
        if ( perNumber.validity.typeMismatch){
            errorPerNumb.innerHTML="inccorect"
        } else{
             errorPerNumb.innerHTML="";
            isValidPnum = true;
        }
    } else if (perNumber.value.length<10){
        errorPerNumb.innerHTML="too short"
        perNumber.classList.remove("correct");
        perNumber.classList.add("error");
        isValidPnum = false;
    } else{
        errorPerNumb.innerHTML="too long"
        perNumber.classList.remove("correct");
        perNumber.classList.add("error");
        isValidPnum = false;
    }
   return isValidPnum;
}

function mobile(){
    if(mobileNumber.value.length==11){
        errorMobile.innerHTML=""
        mobileNumber.classList.remove("error");
        mobileNumber.classList.add("correct");
        isValidMobile = true;
        
    } else if (mobileNumber.value.length<11){
        errorMobile.innerHTML="too short"
        mobileNumber.classList.remove("correct");
        mobileNumber.classList.add("error");
        isValidMobile = false;
    } else { 
    errorMobile.innerHTML="too long"
    mobileNumber.classList.remove("correct");
    mobileNumber.classList.add("error");
    isValidMobile = false;
    }
  return  isValidMobile;
}


function validName(){
   
 if (!userName.validity.valid){
    errorName.innerHTML="Not Valid!"
    userName.classList.remove("correct");
    userName.classList.add("error");
    isUserNameValid = false;
 }else{
   
    errorName.innerHTML=" "
    userName.classList.remove(".error");
    userName.classList.add("correct");
    isUserNameValid = true;

 }
 return isUserNameValid;
}

function validEmail(){
    if(!email.validity.valid){
       
        errorEmail.innerHTML="Not Valid!";
        email.classList.remove("correct");
        email.classList.add("error");

        if (email.validity.typeMismatch){
            errorEmail.innerHTML="dont match"
        } else{
            errorEmail.innerHTML="";
        }
        isEmailValid = false;
    } else{

    errorEmail.innerHTML=" "
    email.classList.remove(".error");
    email.classList.add("correct");
    }
    isEmailValid = true;

    return  isEmailValid;
}

function validPassword(){
     if(password.value.length==0){
        errorPass.innerHTML="fill min 8 charachters"
        password.classList.remove("correct");
        password.classList.add("error");
        isPasswordValid = false;
     }
        else if(password.value.length>0 && password.value.length <8){
            errorPass.innerHTML="very weak password"
            password.classList.remove("correct");
            password.classList.add("error");
        }  else if (password.value.length >=8 && password.value.length <=10){
            errorPass.innerHTML="medium strength password"
            password.classList.remove("error");
            password.classList.add("correct");
            isPasswordValid = true;
     
     } else{
        errorPass.innerHTML=""
        password.classList.remove("error");
        password.classList.add("correct");
        isPasswordValid = true;
     }
     return isPasswordValid;
}

userName.addEventListener('input', ()=>{
    validName();
});
email.addEventListener('input', ()=>{
    validEmail();
})
password.addEventListener('input', ()=>{
    validPassword();
})
perNumber.addEventListener('input', ()=>{
    personalNum();
})
mobileNumber.addEventListener('input', ()=>{
    mobile();
})
textArea.addEventListener('input', ()=>{
    textAreaFunction()
})

function finalFunction(){
  

    };

form.addEventListener('submit', (e)=>{
    e.preventDefault();
  
      
    const isPersonalValid = personalNum();
    const isValidName = validName();
	const isValidEmail = validEmail();
	const isValidPassword = validPassword();
    const isMobileValid = mobile();
    // textAreaFunction();

	if (isValidName && isValidEmail && isValidPassword && isPersonalValid && isMobileValid)   {
		// form.submit();
       
        modal.classList.add("open");
    };

   
   })

   closeModal.addEventListener('click', ()=>{
    modal.classList.remove("open");
    form.reset();
   })


   // text areaze ver gavige da mismatchi ar mo0kmedebs ik rom mxolod cifrebi sheamocmos :(( 