export default (begin, end) => {
  for (let i = begin; i <= end; ++i) {
    const fizz = i % 3 === 0 ? `Fizz` : '';
    const bazz = i % 5 === 0 ? `Bazz` : '';
    console.log(`${fizz}${bazz}` || i);
  }
}
