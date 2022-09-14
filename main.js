const billAmount = document.querySelector("#bill-amount");
const cashGiven = document.querySelector("#cash-given");

const checkButton= document.querySelector("#check-button");

const errorMSG = document.querySelector("#error-msg");

const Noofnotes = document.querySelectorAll(".no-of-notes");

const noteswehave = [2000,500,200,100,50,20,10];

checkButton.addEventListener("click" ,function ValidateAmount(){
     errorMSG.style.display ="none";
    if (billAmount.value > 0){
        
        if(cashGiven.value >= billAmount.value){
            const amountToBeReturned = cashGiven.value - billAmount.value;
            console.log(amountToBeReturned);
            calculateChange(amountToBeReturned);
            // console.log(amountToBeReturned);
           
    }
        else{
             showMSG("do you wana wash plates?");
        }
    }
    
    else{
        showMSG("Invalid bill amount");
        
    }

});
function calculateChange(amountToBeReturned){
    for(let i=0; i < noteswehave.length; i++){
        const numberofnotes =Math.trunc(amountToBeReturned / noteswehave[i]);
        amountToBeReturned = amountToBeReturned % noteswehave[i];
        Noofnotes[i].innerText = numberofnotes;
        console.log(numberofnotes);
    }


}


function showMSG(msg){
    errorMSG.style.display="block";
    errorMSG.innerText = msg;

}