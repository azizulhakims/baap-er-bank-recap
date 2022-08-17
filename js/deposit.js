



document.getElementById('btn-deposit').addEventListener('click', function(){
    const depositField = document.getElementById('deposit-field');
    const newDepositAmountString = depositField.value;
    // console.log(newDepositAmountString);
    const newDepositAmount = parseFloat(newDepositAmountString);
    console.log(newDepositAmount);
    depositField.value='';

    const depositTotalElement = document.getElementById('deposit-total');

    const previousDepositeTotalString = depositTotalElement.innerText;

    const previousDepositeTotal = parseFloat(previousDepositeTotalString);

    const newDepositTotal = previousDepositeTotal + newDepositAmount;

    depositTotalElement.innerText = newDepositTotal

    const balanceTotalElement = document.getElementById('balance-total');

    const previousBalanceTotalElementString = balanceTotalElement.innerText;

    const previusBalanceTotal = parseFloat(previousBalanceTotalElementString);

    const newBalanceTotal = previusBalanceTotal + newDepositAmount;

    balanceTotalElement.innerText = newBalanceTotal;

    
})

