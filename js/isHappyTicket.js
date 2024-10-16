export default (numTicket) => {
  let balance = 0;
  for (let i = 0, k = numTicket.length - 1; i < k; ++i, --k) {
    balance += Number(numTicket[i]) - Number(numTicket[k])
  }
  return balance === 0;
}

