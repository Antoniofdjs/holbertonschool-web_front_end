function welcome(firstName, lastName) {
  fullName = firstName + " " + lastName;

  function displayFullName(fullName) {
    alert(`Welcome ${fullName} !`);
  }
  displayFullName(fullName);
}

welcome("Ant", "DeJesus");
