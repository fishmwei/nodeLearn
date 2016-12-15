var fs = require('fs');

var txt1 =fs.readFileSync('1.txt');
console.log(txt1.toString());

fs.readFile('3.txt', (err, data)=>{
  if (err) return console.log(err);
  console.log(data.toString());
})

console.log('end');
