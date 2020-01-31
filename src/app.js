require('dotenv').config();

const express = require('express');
const app = express();

const PORT = process.env.PORT;

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.post('/echo', (req, res) => {
  console.log('Headers:', JSON.stringify(req.headers, null, 2));
  console.log('Body', JSON.stringify(req.body, null, 2));
  console.log('Querystring:', JSON.stringify(req.query, null, 2));
  console.log('authcode', req.query.authcode);
  console.log('authcode2', req.query.authcode2);
  console.log('POST request complete');
  res.status(200).send('ok');
});

app.get('/echo', (req, res) => {
  console.log('Headers:', JSON.stringify(req.headers, null, 2));
  console.log('Querystring:', JSON.stringify(req.query, null, 2));
  console.log('GET request complete');
  res.status(200).send('ok');
});

app.listen(PORT, () => {
  console.log(`App listening at port: ${PORT}`);
});
