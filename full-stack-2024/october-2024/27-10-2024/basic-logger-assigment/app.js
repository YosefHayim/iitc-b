const express = require('express');
const fs = require('fs')
const app = express();

app.get('/', (req, res) => {
  res.send('Hello World');
});

app.listen(3000, () => {

  setInterval(() => {
    // Get current data by the pc local time
    d = new Date();
    // Get current seconds
    let seconds = d.getSeconds();
    // Get current minutes
    let minutes = d.getMinutes();
    // Get current hour
    let hour = d.getHours();
    // Total current time
    let data = `${d} ${hour}:${minutes}:${seconds}\n`

    // Appending the data to file using async method built-in of fs.
    fs.appendFileSync('logs.txt',data,'utf8',(err) => {
      if (err) {
        console.log(`Failed written data to file.`,err);
      }

    })
  },1000)
  
  console.log('Server is running on port 3000');
});
