var count = 1;
for (count = 1; count < 101; count++) {
  if (count % 15 === 0) {
    console.log("FizzBuzz")
  }
  else if (count % 3 === 0) {
    console.log("Fizz")
  }
  else if (count % 5 === 0) {
    console.log("Buzz");
  }
  else { console.log(count) }
}