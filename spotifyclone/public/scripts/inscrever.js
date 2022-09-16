let button = document.querySelector('.radio button');
let body_aux = document.querySelector('body');
let var_aux = document.querySelector('#email').value.length;
let form = document.querySelector('form');
let aux1,aux2,aux3,aux4,aux5,aux6,aux7,aux8;
let error = [
    document.querySelector('.error1'),
    document.querySelector('.error2'),
    document.querySelector('.error3'),
    document.querySelector('.error4'),
    document.querySelector('.error5'),
    document.querySelector('.error6'),
    document.querySelector('.error7'),
    document.querySelector('.error8'),
    document.querySelector('.error9')
]
let inputs = [
    document.querySelector('#email'),
    document.querySelector("#confirmaremail"),
    document.querySelector("#senha"),
    document.querySelector("#nome"),
    document.querySelector("#dia"),
    document.querySelector(".escolha"),
    document.querySelector('#ano'),
    document.querySelector('#termo')
    
]

let radio = [
    document.querySelectorAll("#m"),
    document.querySelectorAll("#f"),
    document.querySelectorAll("#o"),
]

body_aux.addEventListener('click',()=>{
    
    if(document.querySelector('#email').value.includes('@') == true) {
        error[0].style.display = 'none';
        document.querySelector('#email').classList.add('correto');
        document.querySelector('#email').style.border = '1px solid #000';
        
        aux1 = true;
    }


    if(document.querySelector('#email').value.length >= 1) {
        let email_aux = document.querySelector('#email').value;     
        let confirmar_email = document.querySelector('#confirmaremail').value;
        if(confirmar_email.includes(email_aux) == true){
            error[1].style.display = 'none';
            inputs[1].style.border = '1px solid #000';

            aux2 = true;
        }
    }

    if(inputs[2].value.includes('a1b2c3d4e5') == true) {
        error[2].style.display = 'none';  
        inputs[2].style.border = '1px solid #000';

        aux3 = true;
    }

    if(inputs[3].value.length >= 1) {
        error[3].style.display = 'none';
        inputs[3].style.border = '1px solid #000';

        aux4 = true;
    }

    if(document.querySelector('#ano').value.length == 4) {
        document.querySelector('.error7').style.display = 'none';
        document.querySelector('#ano').style.border = '1px solid #000';

        aux5 = true;
    }
})

button.addEventListener('click',(elemento)=>{   
    elemento.preventDefault();
    let var_aux = document.querySelector('#email').value.length;

    if(inputs[0].value == '' || inputs[0].length == 0 || inputs[1].value == '' || inputs[1].length == 0 
    || inputs[2].value == '' || inputs[2].length == 0 || inputs[3].value == '' || inputs[3].length == 0
    || inputs[4].value == '' || inputs[4].length == 0
    ) {
        error[0].style.display = 'flex';
        inputs[0].style.border = '2px solid red';
        error[1].style.display = 'flex';
        inputs[1].style.border = '2px solid red';
        error[2].style.display = 'flex';
        inputs[2].style.border = '2px solid red';
        error[3].style.display = 'flex';
        inputs[3].style.border = '2px solid red';
        document.querySelector('#hiden').style.display = 'none';
        error[4].style.display = 'flex';
        inputs[4].style.border = '2px solid red';
        error[5].style.display = 'flex';
        error[5].style.marginBottom = '20px';
        error[6].style.marginBottom = '20px';
        error[4].style.marginBottom = '20px';
        inputs[5].style.border = '2px solid red';
        error[6].style.display = 'flex';
        inputs[6].style.border = '2px solid red';
        document.querySelector('.error5').style.marginLeft = '22px';
        document.querySelector('.error6').style.marginLeft = '22px';
        document.querySelector('.error7').style.marginLeft = '22px';
        document.querySelector('.error8').style.marginLeft = '550px';
        document.querySelector('.error9').style.marginLeft = '66px';
       
    }

   

    if(radio[0] != 'checked' || radio[1] != 'checked' || radio[2] != 'checked') {
        error[7].style.display = 'flex';
        //error[7].style.marginTop = '5px';
        //error[7].style.marginTop = '10px';
       
    }

    if(inputs[8] != 'checked') {
        error[8].style.display = 'flex';
        //error[8].style.marginLeft = '21px';
        error[8].style.marginTop = '10px';
        error[8].style.marginBottom = '10px';
    }

    if(var_aux >= 1) {
        error[0].innerHTML = "Esse e-mail é inválido. O formato correto é assim: exemplo@email.com";
    }

    
});

inputs[0].addEventListener('blur',()=>{
        inputs[0].style.border = '2px solid red';
        error[0].style.display = 'flex';   
        let var_aux = document.querySelector('#email').value.length;
    
        if(document.querySelector('#email').value.includes('@') == true) {
            error[0].style.display = 'none';
            document.querySelector('#email').classList.add('correto');
            document.querySelector('#email').style.border = '3px solid #000';
        } else {
            if(var_aux >= 1) {
                error[0].innerHTML = "Esse e-mail é inválido. O formato correto é assim: exemplo@email.com";
                error[0].style.width = '325px'
                
            }
        }
    
});

inputs[1].addEventListener('blur',()=>{

    inputs[1].style.border = '2px solid red';
    error[1].style.display = 'flex';   
     if(confirmar_email.includes(email_aux) == true){
        error[1].style.display = 'none';
        inputs[1].style.border = '4px solid #000';
    }

})


inputs[1].addEventListener('click',()=>{
    inputs[1].addEventListener('keyup',()=>{
        let email_aux = document.querySelector('#email').value;     
        let confirmar_email = document.querySelector('#confirmaremail').value;
      
        if(document.querySelector('#confirmaremail').value.length >= 1) {
            error[1].innerHTML = "Os endereços de e-mail não correspondem.";
        }  if(confirmar_email.includes(email_aux) == true){
            error[1].style.display = 'none';
            inputs[1].style.border = '4px solid #000';
        }
    })
});

inputs[2].addEventListener('blur',()=>{
    inputs[2].style.border = '2px solid red';
    error[2].style.display = 'flex';   

    inputs[0].addEventListener('click',()=>{
        inputs[0].classList.add('teste');
    })
})

inputs[2].addEventListener('keyup',()=>{

    if(inputs[2].value.length == 1 || inputs[2].value.length == 2 || inputs[2].value.length == 3 || inputs[2].value.length == 4 || inputs[2].value.length == 5 || inputs[2].value.length == 6 || inputs[2].value.length == 7) {
        error[2].style.display = 'flex';  
        error[2].innerHTML = "Senha Muito Curta";
    }
    if(inputs[2].value.length >= 8) {
       if(inputs[2].value.includes('11111111') || inputs[2].value.includes('22222222') || inputs[2].value.includes('123456') || inputs[2].value.includes('abcdef')) {
            error[2].style.display = 'flex';  
            error[2].innerHTML = "Senha Fraca";
       }
    }

    if(inputs[2].value.includes('a1b2c3d4e5') == true) {
        error[2].style.display = 'none';  
        inputs[2].style.border = '4px solid #000';
    }
})

inputs[3].addEventListener('blur',()=>{
    inputs[3].style.border = '2px solid red';
    error[3].style.display = 'flex';   
    error[3].innerHTML = "Insira um nome para seu perfil.";
    document.querySelector("#hiden").style.display = 'none';
    inputs[0].addEventListener('click',()=>{
        inputs[0].classList.add('teste');
    })
})

inputs[3].addEventListener('click',()=>{
    inputs[3].style.border = '3px solid #000';
})

inputs[3].addEventListener('keyup',()=>{
    if(inputs[3].value.length >= 1) {
        error[3].style.color = '#000';
        error[3].innerHTML = "isso aparece no seu perfil.";
    }
})

document.querySelector('#dia').addEventListener('click',()=>{
    document.querySelector('#dia').style.border = '3px solid #000';
    document.querySelector('#dia').style.marginBottom = '10px';

    if(document.querySelector('#dia').value.length >=1) {
        document.querySelector('.error5').style.display = 'none';
        document.querySelector('#dia').style.border = '1px solid #000';

        aux6 = true;
    } else {
        document.querySelector('.error5').style.display = 'flex';
    }
})

document.querySelector('#dia').addEventListener('blur',()=>{
    document.querySelector('#dia').style.border = '2px solid #ff0000';
    document.querySelector('.error5').style.display = 'flex';
    document.querySelector('.error5').style.marginLeft = '21px';
    document.querySelector('.error5').style.marginBottom = '5px';   

    if(document.querySelector('#dia').value.length >=1) {
        document.querySelector('.error5').style.display = 'none';
        document.querySelector('#dia').style.border = '1px solid #000';

        aux6 = true;
    } else {
        document.querySelector('.error5').style.display = 'flex';
    }
});

document.querySelector('#mes').addEventListener('click',()=>{
    document.querySelector('#mes').style.border = '3px solid #000';

    if(document.querySelector('#mes').value.length != 0) {
        document.querySelector('#mes').style.border = '3px solid #000';
        
    }

    if(document.querySelector('#mes').value.length != 3) {
        document.querySelector('.error6').style.display = 'none';
        aux7 = true;
        
    }
    
})

document.querySelector('#mes').addEventListener('blur',()=>{
    document.querySelector('#mes').style.border = '1px solid #ff0000';

    if(document.querySelector('#mes').value.length == 3) {
        document.querySelector('#mes').style.border = '1px solid #ff0000';
        document.querySelector('.error6').style.display = 'flex';
        document.querySelector('.error6').style.marginLeft = '20px';
        document.querySelector('.error6').style.marginTop = '10px';
    } else {
        document.querySelector('#mes').style.border = '1px solid #000';
        aux7 = true;
    }
})

document.querySelector('#ano').addEventListener('click',()=>{
    if(document.querySelector('#ano').value.length == 4) {
        document.querySelector('.error7').style.display = 'none';
        document.querySelector('.error7').style.border = '1px solid #000';
        aux8 = true;
    }
})

document.querySelector('#ano').addEventListener('blur',()=>{
    document.querySelector('#ano').style.border = '2px solid #ff0000';
    if(document.querySelector('#ano').value.length == 0 || document.querySelector('#ano').value.length == 1 || document.querySelector('#ano').value.length == 2 || document.querySelector('#ano').value.length == 3) {
        document.querySelector('.error7').style.display = 'flex';
        document.querySelector('.error7').style.marginLeft = '20px';
        document.querySelector('.error7').style.marginTop = '10px';
    }

    if(document.querySelector('#ano').value.length == 4) {
        document.querySelector('.error7').style.display = 'none';
        document.querySelector('.error7').style.border = '1px solid #000';
        aux8 = true;
    }
})


inputs[0].addEventListener('keyup',()=>{
    
    if(document.querySelector('#email').value.length >=1) {
        error[0].innerHTML = "Esse e-mail é inválido. O formato correto é assim: exemplo@email.com";
        error[0].style.width = '325px'
        
        if(document.querySelector('#email').value.includes('@') == true) {
            error[0].style.display = 'none';
            document.querySelector('#email').classList.add('correto');
            document.querySelector('#email').style.border = '3px solid #000';
        }
    }

    
})


document.querySelector("#m").addEventListener('click',()=>{
    document.querySelector('.error8').style.display = 'none';

    if(document.querySelector("#o") == 'checked') {
        console.log('teste');
    }
});

document.querySelector("#f").addEventListener('click',()=>{
    document.querySelector('.error8').style.display = 'none';
});

document.querySelector("#o").addEventListener('click',()=>{
    document.querySelector('.error8').style.display = 'none';
});


document.querySelector('button').addEventListener('click',(e)=>{
    if(aux1 == true && aux2 == true && aux3 == true && aux4 == true && aux4 == true && aux5 == true && aux6 == true && aux7 == true && aux8 == true) {
        form.submit();
    }
})
