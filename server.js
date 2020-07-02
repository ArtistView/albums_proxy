const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const Promise = require('bluebird');

const PORT = process.env.PORT || 8000; // running my proxy on port 8000
const app = express();

app.use(express.static('client'));
app.use(bodyParser());
app.use(cors());
// statically load the index.html file
const status = app.get('/', (req, res) => {
  console.log('status');
  res.status(200).send('connected');
  res.end();
});
// write get requests to pull in the various features from the outer FEC folder

app.listen(PORT, () => {
  console.log('listening on port', PORT);
});
