require('dotenv').config();

const express = require('express');
const app = express();

const PORT = process.env.PORT || 3000;

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.all('/', (req, res) => {
  const response = {
    header: req.headers,
    method: req.method,
    body: req.body,
    querystring: req.query,
    protocal: req.protocol,
    ip: req.ip,
    cookies: req.cookies,
  };

  res.status(200).json(response);
});

app.listen(PORT, () => {
  console.log(`App listening at port: ${PORT}`);
});
