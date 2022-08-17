// console.log('hello')
function getInputFieldValueById(inputId){
    const inputField = document.getElementById(inputId);
    const inputFieldValueString = inputField.value;
    const inputFieldValue = parseFloat(inputFieldValueString);
    inputField.value = '';
    return inputFieldValue;
}

// function getElementValueById (elementId){
//     const element = document.getElementById(elementId);
//     const elementValueString = element.innerText;
//     const value = parseFloat(elementValueString);
//     return value;
// }

function getTextElementValueById(elementId){
    const textElement = document.getElementById(elementId);
    const textElementValueString = textElement.innerText;
    const textElementValue = parseFloat(textElementValueString);
    return textElementValue;  
}


function setTextElementValueId(elementId, newVelue){
    const textElement =document.getElementById(elementId);
    textElement.innerText = newVelue;
}


document.getElementById('btn-deposit').addEventListener('click', function(){
    // console.log('deposit button click');

    const newDepositAmount = getInputFieldValueById('deposit-field');

    const previousDepositTotal = getTextElementValueById('deposit-total');
    // console.log(previousDepositTotal);


    const newDepositTotal = previousDepositTotal + newDepositAmount;

    setTextElementValueId('deposit-total', newDepositTotal);

    const previousBalanceTotal = getTextElementValueById('balance-total')
    const newBalanceTotal = previousBalanceTotal + newDepositAmount;

    setTextElementValueId('balance-total', newBalanceTotal);

})