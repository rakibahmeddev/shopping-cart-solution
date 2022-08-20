function updateCaseNumber(isIncrease) {
  const caseNumberFiled = document.getElementById("case-number-filed");
  const caseNumberString = caseNumberFiled.value;
  const previousCaseNumber = parseInt(caseNumberString);

  let newCaseNumber;
  if (isIncrease == true) {
    newCaseNumber = previousCaseNumber + 1;
  } else {
    newCaseNumber = previousCaseNumber - 1;
  }
  caseNumberFiled.value = newCaseNumber;

  return newCaseNumber;
}

function updateCaseTotalPrice(newCaseNumber) {
  const caseTotalPrice = newCaseNumber * 59;
  const caseTotalElement = document.getElementById("case-total");
  caseTotalElement.innerText = caseTotalPrice;
}

document.getElementById("btn-case-plus").addEventListener("click", function () {
  const newCaseNumber = updateCaseNumber(true);

  updateCaseTotalPrice(newCaseNumber);
  CalculateSubtotal();
});

// minus button
document
  .getElementById("btn-case-minus")
  .addEventListener("click", function () {
    const newCaseNumber = updateCaseNumber(false);

    updateCaseTotalPrice(newCaseNumber);
    CalculateSubtotal();
  });
