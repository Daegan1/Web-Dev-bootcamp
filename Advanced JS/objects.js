//const job = {
//  title: "developer",
//  location: "New York",
//  salary: "50000",
//};
//console.log(new Date().toISOString());

//const { clear } = require("console");

class Job {
  constructor(jobTitle, place, salary) {
    (this.title = jobTitle), (this.place = place), (this.salary = salary);
  }

  describe() {
    console.log(
      'Im a ${this.title}, i work in ${this.locatin} and I earn ${this.salary}.'
    );
  }
}


const developer = new Job("developer", "New York", "50000");
const cook = new Job("cook", "portland", "35000");
console.log(developer);
