const express = require('express');
const bodyParser = require('body-parser');
const axios = require('axios');

const app = express();

app.use(bodyParser.json());

function checkPassword(req, res, next) {
  if (req.query.password === "tylerrules") {
    next();
  } else {
    res.status(400).send("WRONG");
  }
}

function checkApiKey(req, res, next) {
  if(req.headers.apikey === "isaiahrulesatcode") {
    next();
  } else {
    res.status(403).send("don't give the things")
  }
}


app.get('/data', checkPassword, checckApiKey, (req, res) => {
  res.json({
    someData: 'pretend this is meaningful data, like URLs to pictures of the simpsons',
  });
});

app.get('/more-data', checkPassword, (req, res) => {
  res.json({
    moreData: 'I wish this data were protected!',
  });
});

const port = 3005;
app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
