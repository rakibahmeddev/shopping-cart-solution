function getTextElementValueById(elementId) {
  const phoneTotalElement = document.getElementById(elementId);
  const CurrentPhoneTotalString = phoneTotalElement.innerText;
  const currentPhoneTotal = parseInt(CurrentPhoneTotalString);
  return currentPhoneTotal;
}
function setTextElementValueById(elementId, value) {
  const currentSubTotalElement = document.getElementById(elementId);
  currentSubTotalElement.innerText = value;
}

function CalculateSubtotal() {
  // calculate
  const currentPhoneTotal = getTextElementValueById("phone-total");
  const currentCaseTotal = getTextElementValueById("case-total");

  const subTotal = currentPhoneTotal + currentCaseTotal;
  setTextElementValueById("sub-total", subTotal);

  //   tax calculation
  const taxAmountString = (currentCaseTotal * 0.1).toFixed(2);
  const taxAmount = parseFloat(taxAmountString);
  setTextElementValueById("tax-total", taxAmount);

  const finalAmount = subTotal + taxAmount;
  setTextElementValueById("final-total", finalAmount);
}
