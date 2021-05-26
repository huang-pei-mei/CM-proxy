const express  = require('express');
const app = express();
const port = 9000;
const axios = require('axios');
const puppeteer = require('puppeteer');

app.use(express.static('public'));

// app.get('/title-service/:id', async (req, res) => {
//   const browser = await puppeteer.launch({headless: true});
//   const page = await browser.newPage();
//   await page.goto(`http://localhost:2002/?id=${req.params.id}`);
//   await page.waitForSelector('h1');
//   const html = await page.content();
//   await browser.close();
//   res.send(html);
// });

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