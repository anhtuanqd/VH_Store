const express = require('express');
const Product = require('./dbFiles/product');
const dbOperation = require('./dbFiles/dbOperation');
const cors = require('cors');

const API_PORT = process.env.PORT || 5000;
const app = express();

let client;
let session;
app.use(express.json());
app.use(express.urlencoded());
app.use(cors());
var router = express.Router();

// router.use((request, response, next) => {
//   console.log('middleware');
//   next();
// });

// router.route('/orders').get((request, response) => {
//   dbOperation.getData().then((result) => result);
// });

app.post('/api', async (req, res) => {
  const result = await dbOperation.getData();
  res.send(result);
});

app.post('/hello', function (req, res) {
  console.log('called');
  res.send({ result: 'OMG' });
});

// let Ao = new Product(2, 'sa', 'sa', 'sa', 'sa', 'sa', 'sa', 'sa');

dbOperation.getData().then((res) => {
  console.log(res);
});

// dbOperation.createData(Ao);

app.listen(API_PORT, () => console.log('casi i gay'));
