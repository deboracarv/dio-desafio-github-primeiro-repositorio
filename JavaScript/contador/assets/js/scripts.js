var currentNumberWrapper= document.getElementById('currentNumber');
var currentNumber = 0;
var count = 0
const button1 = document.getElementById("subtrair"); 
const button2 = document.getElementById("adicionar");

button1.addEventListener("click", decrement);
button2.addEventListener("click", increment);

function increment(){
    if(count < 10 ){    
        currentNumber = currentNumber + 1;
        currentNumberWrapper.innerHTML = currentNumber;
        count = count + 1;
    } else{
        button2.disable = true
    }
}

function decrement(){
    if(count > 0 ){
        currentNumber = currentNumber - 1;
        currentNumberWrapper.innerHTML = currentNumber;
        count = count - 1;
    }else{
        button1.disable = true
    }
    
}
