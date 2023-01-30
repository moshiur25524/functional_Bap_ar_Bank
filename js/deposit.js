

document.getElementById('btn-deposit').addEventListener('click', function () {
    const newDepositAmount = getInputFieldValueById('deposit-field')

    const previousDepositAmount = getElementValuById('deposit-total');
    const currentDepositAmount = previousDepositAmount + newDepositAmount;
    setElementTextByIdAndValue('deposit-total', currentDepositAmount)
    
    const previousBalance = getElementValuById('balance-total')
    const currentBalance = previousBalance + newDepositAmount;
    setElementTextByIdAndValue('balance-total', currentBalance)

})