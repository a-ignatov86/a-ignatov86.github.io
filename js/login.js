const loginsec = document.querySelector('.login-section')
const loginlink = document.querySelector('.login-link')
const reglink = document.querySelector('.register-link')
reglink.addEventListener('click',()=>{
    loginsec.classList.add('active')
})
loginlink.addEventListener('click',()=>{
    loginsec.classList.remove('active') 
})