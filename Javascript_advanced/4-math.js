divideBy = (firstNumber) => {
  return (secondNumber) => {
    return secondNumber / firstNumber;
  };
};

addBy = (firstNumber) => {
  return (secondNumber) => {
    return firstNumber + secondNumber;
  };
};

add100 = () => {
  return addBy(100);
};

add1000 = () => {
  return addBy(1000);
};

divide10 = () => {
  return divideBy(10);
};
divide100 = () => {
  return divideBy(100);
};

const addBy100 = add100();
const addBy1000 = add1000();
const divideBy10 = divide10();
const divideBy100 = divide100();
