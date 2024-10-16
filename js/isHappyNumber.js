function sumOfSquareDigits (num) {
  let sumResult = 0;
  const strNum = String(num);
  for (let i = 0; i < strNum.length; ++i) {
    sumResult += Number(strNum[i]) ** 2;
  }
  return sumResult;
}

/* function isHappyNumber (num) {
  let i = 0;
  while (i <= 10) {
    if (sumOfSquareDigits(num) === 1) {
      return true;
    } else {
      num = sumOfSquareDigits(num);
      i += 1
    }
  }
  return num === 1;
} */

export default (num) => {
  let resultSum = num;
  for (let i = 0; i < 10; ++i) {
    resultSum = sumOfSquareDigits(resultSum)
    if ( resultSum === 1) {
      return true;
    }
  }
  return false;
};

