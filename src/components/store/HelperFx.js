export const convertCurr = (amount, currency) => {
  if (currency === "USD") {
    return amount * 1;
  }
  if (currency === "GBP") {
    return Math.round(amount * 0.81);
  }
  if (currency === "EUR") {
    return Math.round(amount * 0.92);
  }
  if (currency === "JPY") {
    return Math.round(amount * 129);
  }
  if (currency === "CAD") {
    return Math.round(amount * 1.33);
  }
};
export const toggleInvalidClass = (err, baseClase, inValidClass) => {
  if (err) {
    return `${baseClase} ${inValidClass}`;
  } else {
    return `${baseClase}`;
  }
};
