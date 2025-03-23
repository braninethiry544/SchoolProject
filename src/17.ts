function calculateArea(radius: number) {
  const area = Math.PI * radius ** 2;
  console.log(`The area of the circle with radius ${radius} is ${area.toFixed(2)}`);
}

calculateArea(5);
