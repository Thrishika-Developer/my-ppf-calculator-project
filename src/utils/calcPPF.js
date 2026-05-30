export default function calcPPF(deposit, years, rate) {
  let balance = 0;
  let totalInvested = 0;
  const r = rate / 100;
  for (let y = 1; y <= years; y++) {
    balance = (balance + deposit) * (1 + r);
    totalInvested += deposit;
  }
  return {
    invested: Math.round(totalInvested),
    interest: Math.round(balance - totalInvested),
    maturity: Math.round(balance),
  };
}
