const express = require('express');
const app = express();
app.get('/', (req, res, next) => {
  doSomethingAsync().then(() => {
    res.send('Hello, world!');
  }).catch(next);
});

app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('Something broke!');
});

function doSomethingAsync() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const randomNumber = Math.random();
      if (randomNumber < 0.5) {
        reject(new Error('Something went wrong!'));
      } else {
        resolve();
      }
    }, 1000);
  });
}