
document.getElementById('btn-withdraw').addEventListener('click', function(){
  const newWithdrawAmont = getInputFieldValueById('withdraw-field')
  const previousWithDrawAmount = getElementValuById('withdraw-total')
  const currentWithdrawAmount = previousWithDrawAmount + newWithdrawAmont;
  setElementTextByIdAndValue('withdraw-total', currentWithdrawAmount)

  const previousBalanceAmount = getElementValuById('balance-total')
  const currentBalanceAmount = previousBalanceAmount - newWithdrawAmont;
  setElementTextByIdAndValue('balance-total', currentBalanceAmount)
})