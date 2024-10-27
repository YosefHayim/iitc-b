const fs = require('fs');

fs.readFile('input.txt', 'utf8', (err, data) => {
  if (err) {
    console.log('Not valid', err);
  } else {
    console.log(data);
    
  }
});
