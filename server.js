const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const PORT = 8000; // running my proxy on port 8000
const app = express();

app.use(bodyParser());
app.use(cors());
app.use(express.static('client'));
// statically load the index.html file

// write get requests to pull in the various features from the outer FEC folder

app.listen(PORT, () => {
  console.log('listening on port', PORT);
});
