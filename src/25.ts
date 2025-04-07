function sum(numbers: number[]): number {
  let sum = numbers.reduce((acc, curr) => acc + curr, 0);
  return sum;
}

// Example usage
const inputNumbers = [1, 2, 3, 4, 5];
console.log(sum(inputNumbers)); // Output: 15
