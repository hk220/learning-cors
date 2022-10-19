const { program } = require('commander');
const express = require('express');
const app = express();
const port = 3000;

program.option('-c, --cors');
program.parse();
const options = program.opts();

console.log(options);

app.get('/', (req, res) => {
  if (options.cors) res.header('Access-Control-Allow-Origin', 'http://localhost:8080');
  res.send('Hello World!');
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
