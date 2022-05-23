//Create a HTTP Server using Express
var express = require('express');
var app = express();

app.get('/', function (req, res) {
    if (req.url == '/'){
    response.writeHead(301, {
        Location: `http://google.com`
      }).end();
}});


//Handle a GET request the uses param’s to request for a specific resource, the response is the resource 
const fetch = require('node-fetch');
fetch('https://google.com')
    .then(res => res.text())
    .then(text => console.log(text));


//Use the inbuilt fs module to store and retrieve the resources on your server
const fs = require('fs').promises;

async function readFile(filePath) {
  try {
    const data = await fs.readFile(filePath);
    console.log(data.toString());
  } catch (error) {
    console.error(`Got an error trying to read the file: ${error.message}`);
  }
}


//promised version of fs.readFile
const fs = require('fs');
const path = require('path');

const filepath = path.resolve(__dirname, 'file.txt');

(async () => {
  const data = await fs.promises.readFile(filepath, 'utf8');
  console.log(data);
})();


//promised version of fs.writeFile
const fs = require('fs');
const fsPromises = require('fs').promises;
let data = "This is a file containing"
        + " a collection of movies.";
  
(async function main() {
    try {
        await fsPromises.writeFile(
                "movies.txt", data)
  
        console.log("File written successfully");
        console.log("The written file has"
            + " the following contents:");
  
        console.log("" + 
            fs.readFileSync("./movies.txt"));
  
    } catch (err) {
        console.error(err);
    }
})();


app.listen(3000, function () {
    console.log('Example app listening on port 3000.');
});
