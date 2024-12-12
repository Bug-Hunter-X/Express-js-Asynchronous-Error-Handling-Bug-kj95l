const express = require('express');
const app = express();
app.get('/', (req, res) => {
  // Asynchronous operation that might throw an error
  doSomethingAsync().then(() => {
    res.send('Hello, world!');
  }).catch(err => {
    // Error handling in a wrong place
    console.error('Error:', err);
  });
});

function doSomethingAsync() {
  return new Promise((resolve, reject) => {
    // Simulate an asynchronous operation that might fail
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