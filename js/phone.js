function updatePhoneNumber(isIncrease) {
  const phoneNumberField = document.getElementById("phone-number-filed");
  const phoneNumberString = phoneNumberField.value;
  const previousPhoneNumber = parseInt(phoneNumberString);

  let newPhoneNumber;
  if (isIncrease == true) {
    newPhoneNumber = previousPhoneNumber + 1;
  } else {
    newPhoneNumber = previousPhoneNumber - 1;
  }
  phoneNumberField.value = newPhoneNumber;

  return newPhoneNumber;
}

function updatePhoneTotal(newPhoneNumber) {
  const phoneTotalPrice = newPhoneNumber * 1219;
  const phoneTotalElement = document.getElementById("phone-total");
  phoneTotalElement.innerText = phoneTotalPrice;
}

document
  .getElementById("btn-phone-plus")
  .addEventListener("click", function () {
    const newPhoneNumber = updatePhoneNumber(true);
    updatePhoneTotal(newPhoneNumber);

    CalculateSubtotal();
  });

// minus button
document
  .getElementById("btn-phone-minus")
  .addEventListener("click", function () {
    const newPhoneNumber = updatePhoneNumber(false);
    updatePhoneTotal(newPhoneNumber);

    CalculateSubtotal();
  });
