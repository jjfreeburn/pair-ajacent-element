const numbers = [5, 1, 2, 3, 1, 4];

var results = [];

for (let i = 0; i < numbers.length; i++) {
  var currentNumber = numbers[i];
  var nextNumber = numbers[i + 1];

  var result = currentNumber * nextNumber;

  if (result) {
    results.push(result);
  }

  var largestNumber = Math.max(...results);
}
console.log(largestNumber);
