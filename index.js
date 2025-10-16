const express = require('express');

const app = express();
const hostname = '0.0.0.0';
const port = 3001;

app.get('/', (req, res) => {
  res.send('welcome to the tamir demo!\n');
});

app.get('/doron', (req, res) => {
  res.send('Hello doron!\n');
});

app.get('/zehava', (req, res) => {
  res.send('Helo Zehava!\n');
});

app.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});

