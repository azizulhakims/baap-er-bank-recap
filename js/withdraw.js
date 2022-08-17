// console.log('H')

document.getElementById('btn-withdraw').addEventListener('click', function(){
    // console.log('hello');

    const withdrawField = document.getElementById('withdeaw-field');

    const newWithdrawFieldString = withdrawField.value;
    // console.log('hello');

    const newWithdrawAmount = parseFloat(newWithdrawFieldString);

    withdrawField.value='';

    const withdrawTotalElement = document.getElementById('withdeaw-total');

    const previuswithdrawTotalString = withdrawTotalElement.innerText;

    const previusWithdeawTotal = parseFloat(previuswithdrawTotalString);


    const newWithdrawTotal = newWithdrawAmount + previusWithdeawTotal;

    withdrawTotalElement.innerText = newWithdrawTotal;

    

    const balanceElement = document.getElementById('balance-total');

    const previousBalanceElementString = balanceElement.innerText;

    const previusBalanceTotalAmount = parseFloat(previousBalanceElementString);

    const afterWithdrawBalance = previusBalanceTotalAmount- newWithdrawAmount;

    balanceElement.innerText = afterWithdrawBalance;



    // const afterNewBalance = previusBalanceTotal - newWithdrawAmount;

    // balanceTotalElement.innerText = newBalanceTotal;


})