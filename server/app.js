const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.setHeader('Access-Control-Allow-Origin', 'http://localhost:8080')
  res.send('Hello World!');
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
