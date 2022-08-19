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

document.getElementById("btn-case-plus").addEventListener("click", function () {
  const newCaseNumber = updateCaseNumber(true);
  const caseTotalPrice = newCaseNumber * 59;
  const caseTotalElement = document.getElementById("case-total");
  caseTotalElement.innerText = caseTotalPrice;
});

// minus button
document
  .getElementById("btn-case-minus")
  .addEventListener("click", function () {
    updateCaseNumber(false);
  });
