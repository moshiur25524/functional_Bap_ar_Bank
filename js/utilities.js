function getInputFieldValueById(inputId) {
    const inputField = document.getElementById(inputId);
    const inputValue = parseFloat(inputField.value);
    inputField.value = '';
    return inputValue;
}

function getElementValuById(inputid){
    const elementField = document.getElementById(inputid);
    const elementValue = parseFloat(elementField.innerText);
    return elementValue
}

function setElementTextByIdAndValue(textId, currentAmount){
    const TotalCurrentAmount = document.getElementById(textId);
    TotalCurrentAmount.innerText =  currentAmount
}

// function getTotalBalanceIdAndAmount(textId, inputValue){
//     const totalBalance = document.getElementById(textId);
//     const totalBalanceAmount = parseFloat(totalBalance.innerText);
//     const currentBalanceAmount = totalBalanceAmount + inputValue;
//     totalBalance.innerText = currentBalanceAmount;
// }