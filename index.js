function makeModulus(a, b) {
  let c = Math.floor(a / b);
  let result = a - c * b;
  return result;
}
