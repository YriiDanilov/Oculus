export default (num) => {
  if (num < 6) {
    return false;
  }

  let resultNum = 0;
  for (let i = 1; i <= num / 2; i += 1) {
    if (num % i === 0) {
      resultNum += i; 
    }
  }
  return resultNum === num;
}
