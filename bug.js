const express = require('express');
const app = express();
app.get('/', (req, res) => {
  res.send('Hello World!');
});
app.listen(3000, () => {
  console.log('Server is listening on port 3000');
});

//This code will work perfectly fine. But if the port 3000 is already in use by another application, then the server will not start and there will be no error message. 