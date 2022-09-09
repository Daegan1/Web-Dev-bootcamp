function greetUser(greetingPrefix, userName = "user") {
  console.log(`${greetingPrefix} ${userName} !`);
}
greetUser("Hi, Max");
greetUser("Hello");

function sumUp(...numbers) {
  let result = 0;

  for (const number of numbers) {
    result += number;
  }
  return result;
}

const inputNumbers = [1, 5, 7, 10, 15, 23];
console.log(sumUp(...inputNumbers));

console.log(sumUp);
