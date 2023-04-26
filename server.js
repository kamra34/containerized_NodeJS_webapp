// app.js
//const express = require('express');
//const app = express();
//const port = process.env.PORT || 3000;

//app.get('/', (req, res) => {
 // res.send('Hello World!');
//});

//app.listen(port, () => {
//  console.log('Server is listening at http://localhost:${port}');
//});

const express = require('express');
const app = express();
const port = 3000;
const path = require('path');

app.use(express.static('public'));

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public/main.html'));
});

app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`);
});

