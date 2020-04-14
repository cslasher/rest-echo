require('dotenv').config();

const express = require('express');
const app = express();

const PORT = process.env.PORT;

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.post('/echo', (req, res) => {
  const response = {
    header: req.headers,
    body: req.body,
    querystring: req.query,
    type: 'POST',
  };

  res.status(200).json(response);
});

app.get('/echo', (req, res) => {
  const response = {
    header: req.headers,
    querystring: req.query,
    type: 'GET',
  };

  res.status(200).json(response);
});

app.listen(PORT, () => {
  console.log(`App listening at port: ${PORT}`);
});
