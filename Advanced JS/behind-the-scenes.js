const hobbies = ["volleyball, hiking, surfing, biking, camping"];

hobbies.push("yoga");

console.log(hobbies);

const person = { age: 32 };

function getAdultYears(p) {
  p.age -= 18;
  return p.age;
}
console.log(getAdultYears(person));
