function getPin(){
    const pin =Math.round(Math.random() * 10000);
    const pinString = pin + '';
    if(pinString.length ==4){
        return pin;
    }
    else{
        //console.log('git 3 digit', pin);
        return getPin();
    }
}
function generatePin(){
    const pin = getPin();
    document.getElementById('display-pin').value =pin;
};


document.getElementById('key-pad').addEventListener('click' ,function(event){
     const number  = event.target.innerText;
     const calcInput = document.getElementById('type-numbers');
     if(isNaN(number)){
        if(number == 'C'){
            calcInput.value = ''
        }
     }
     else{
      
        const previousNumber = calcInput.value;
        const newNumber =  previousNumber + number;
        calcInput.value = newNumber;
     }
});

// mactchin matching 

const successNotify =  document.getElementById('notify-success');
const failedNotify =  document.getElementById('notify-failed');
function varifyPin(){
   const pin = document.getElementById('display-pin').value;
   const typeNumbers =document.getElementById('type-numbers').value;
   if(pin === typeNumbers){
   
    successNotify.style.display ="block";
    failedNotify.style.display ="none"
   }
   else{
    
    failedNotify.style.display ="block";
    successNotify.style.display ="none";
   }
}