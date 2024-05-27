let userName=document.getElementById('userName')
let email=document.getElementById('email')
let password=document.getElementById('password')
let rePassword=document.getElementById('repeat')
let form=document.getElementById('form')
let check=document.getElementById('checkbox')

form.addEventListener('submit',(e)=>{
    
    if(!validateInputs()){
      e.preventDefault();
    }
})

function validateInputs(){
    
    let userNameVal=userName.value.trim()
    let emailVal=email.value.trim()
    let passVal=password.value.trim()
    let rePassVal=rePassword.value.trim()
    let res=true

    if(userNameVal===''){
      res=false
      error(userName,'Please enter your Username')
    }
    else 
      success(userName)

    if(emailVal===''){
      error(email,'Please enter your email')
      res=false
    }
    else if(!validateEmail(emailVal)){
      error(email,'Please enter a valid email')
      res=false
    }
    else
      success(email)

    if(passVal===''){
      error(password,'Please enter your password')
      res=false
    }
    else if(passVal.length<8){
      error(password,'your password length must be greater than 8')
      res=false
    }
    else
      success(password)

    if(rePassVal===''){
      error(rePassword,'This field cannot be empty')
      res=false
    }
    else if(rePassVal!==passVal){
      error(rePassword,'Password and Re-password does not match')
      res=false
    }
    else{
     console.log('hi')
      success(rePassword)
    }

    if(check.checked==false){
        console.log('hi')
        res=false;
    }

    return res;
}

function error(element,message){
    let parent1=element.parentElement
    let errElement=parent1.querySelector('.error')
    errElement.innerHTML=message
    parent1.classList.add('error1')
    parent1.classList.remove('success1')
}

function success(element){
    let parent1=element.parentElement
    let errElement=parent1.querySelector('.error')
    errElement.innerHTML=''
    parent1.classList.add('success1')
    parent1.classList.remove('error1')
}

function validateEmail(emailVal) 
{
 if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(emailVal))
  {
    return (true)
  }
 else
    return (false)
}
