const randomNumber = Math.floor(Math.random() * 10) + 1;
console.log(`The random number is ${randomNumber}`);

if (randomNumber % 2 === 0) {
  console.log("Even");
} else {
  console.log("Odd");
}
