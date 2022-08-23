const express = require('express');
const Product = require('./dbFiles/product');
const dbOperation = require('./dbFiles/dbOperation');
const cors = require('cors');

const app = express();

let client;
let session;
app.use(express.json());
app.use(express.urlencoded());
app.use(cors());
var router = express.Router();

app.get('/aoquan', async (req, res) => {
  console.log(req);
  const result = await dbOperation.getAoQuan();
  const data = result.recordsets[0];
  res.send(data);
});

app.post('/hello', function (req, res) {
  console.log('called');
  res.send({ result: 'OMG' });
});

// let Ao = new Product(2, 'sa', 'sa', 'sa', 'sa', 'sa', 'sa', 'sa');

dbOperation.getAoQuan().then((res) => {
  return res;
});

// dbOperation.createData(Ao);

app.listen(5000, function () {
  console.log('Express listening on port', this.address().port);
});
