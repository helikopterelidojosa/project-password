let parole = '007';
let inputPW;

function givePW(){
 inputPW = document.getElementById('pw').value;

    if(parole == inputPW){
        document.getElementById('new').style.display = 'block';

        return inputPW;
    }
    else if(parole != inputPW && document.getElementById('new').style.display === 'block')
    {
     
        document.getElementById('new').style.display = 'none';
     
        document.getElementById('para').innerHTML = 'thank you! enter correct password, to change text again';
    }
    else
    {
        document.getElementById('new').style.display = 'none';

        alert('the password is incorrect!!!');
    };};

function fun1(){




    if (parole == inputPW){

        


        let chTXT = document.getElementById('inp').value;



        document.getElementById('para').innerHTML = 'good! your text goes like this: '+ chTXT;


        
    }
    
};

