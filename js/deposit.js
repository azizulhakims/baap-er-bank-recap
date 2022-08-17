// console.log('hello')


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