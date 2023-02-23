function comparison(a, b) {
  let result;
  switch (Math.sign(a - b)) {
    case 1:
      result = `${a} is greater than ${b}`;
      break;
    case -1:
      result = `${a} is smaller than ${b}`;
      break;
    default:
      result = `${a} is equal to ${b}`;
      break;
  }
  return result;
}
