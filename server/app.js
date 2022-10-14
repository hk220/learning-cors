const express = require('express');
const app = express();
const port = 3000;

if (process.env.USE_CORS) {
  console.log('Attach CORS Header');
  const cors = require('cors');
  app.use(cors({
    origin: 'http://localhost:8080',
    credentials: true,
    optionsSuccessStatus: 200
  }));
}

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
