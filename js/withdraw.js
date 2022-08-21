// console.log('hello')

document.getElementById('btn-withdraw').addEventListener('click', function(){
    // console.log('hello')

    const newWithdrawAmount = getInputFieldValueById('withdeaw-field');
    const previusWithdeawTotal = getTextElementValueById('withdeaw-total');

if(newWithdrawAmount> previusWithdeawTotal){
    alert('Baper Account a ato taka nai')
    return;
}
    const newWithdeawTotal = previusWithdeawTotal + newWithdrawAmount;
    setTextElementValueId('withdeaw-total', newWithdeawTotal);

    const previousBalanceTotal = getTextElementValueById('balance-total');
    const newBalanceTotal = previousBalanceTotal - newWithdrawAmount;

    setTextElementValueId('balance-total', newBalanceTotal);
})