// console.log('hello')
function getInputFieldValueById(inputId){
    const inputField = document.getElementById(inputId);
    const inputFieldValueString = inputField.value;
    const inputFieldValue = parseFloat(inputFieldValueString);
    return inputFieldValueString;
}


document.getElementById('btn-deposit').addEventListener('click', function(){
    // console.log('deposit button click');

    const newDepositAmount = getInputFieldValueById('deposit-field');

})