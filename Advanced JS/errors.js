const fs = require("fs");

function readFile() {
  try {
    const fileDate = fs.readFileSync("data.json");
  } catch {
    console.log("An Error Occurred");
  }
  console.log("hit that shit");
}
readFile();
