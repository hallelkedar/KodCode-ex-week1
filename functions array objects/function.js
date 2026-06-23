greet = (name) => `Hello ${name}`;

add = (num1, num2) => num1 + num2;

isEven = (num) => num % 2 == 0;

getFirstItem = (arr) => arr[0];

upperStr = (str) => str.toUpperCase();

totalArray = (arr) => {
  let total = 0;
  for (const num of arr) {
    total += num;
  }
  return total;
};

getSquared = (num) => num ** 2;

function getEvenNumbers(arr) {
  const result = [];
  for (const num of arr) {
    if (num % 2 == 0) {
      result.push(num);
    }
  }
  return result;
}
