let arr = [];
const test = () => {
  for (let num = 1; num <= 50; num++) {
    if (num % 2 === 0) arr.push(num);
  }
  return arr;
};
test();
