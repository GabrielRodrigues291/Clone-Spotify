









const email = document.querySelector('#email');
const senha = document.querySelector('#senha');
const button = document.querySelector('button');
const error = document.querySelector('.buttomerror');

button.addEventListener('click',()=>{
    if(email.value == '' || email.length == 0 || senha.length == 0 || senha.value == '') {
        error.style.display = 'flex';
    }
   
})

