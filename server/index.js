const express  = require('express');
const app = express();
const port = 9000;
const axios = require('axios');

app.use(express.static('public'));

app.get('/title-service/:id', async (req, res) => {
  axios.get(`http://localhost:2002?id=${req.params.id}`)
  .then(data => {
    console.log(data);
    res.status(200).json(data);
  })
  .catch(err => {
    console.log('err: ', err);
    res.status(500).send(err);
  })
});

app.listen(port, () => {
  console.log(`Audible proxy listening at http://localhost:${port}`);
});