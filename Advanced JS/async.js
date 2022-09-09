const fs = require("fs/promises");

async function readFile() {
  let fileData;

  //fs.readFile("data.txt", function (error, fileData) {
  //console.log("File parsing done");
  //console.log(fileData.toString());
  // start another async task that sends the data to the database
  //});

  fileData = await fs.readFile("data.txt");

  console.log("File parsing done");
  console.log(fileData.toString());

  console.log("hit that shit");
}
readFile();
