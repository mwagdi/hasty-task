const rp = require('request-promise');
const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

const app = express();

const port = process.env.PORT || 5000;

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.use(bodyParser.json());

const router = express.Router();
router.get('/', (req,res) => {
    const requestOptions = {
        method: 'GET',
        uri: 'https://pro-api.coinmarketcap.com/v1/cryptocurrency/listings/latest',
        headers: {
          'X-CMC_PRO_API_KEY': 'e57a5605-0e78-443c-b7aa-d22c83e7dc4b'
        },
        json: true,
        gzip: true
      };
      
      rp(requestOptions).then(response => {
        res.json(response)
      }).catch((err) => {
        console.log('API call error:', err.message);
    });
});

app.use('/api', router);

app.use((err, req, res, next) => {
    console.log(err);
    next();
  });

app.use(express.static(path.join(__dirname, "client", "build")));

app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "client", "build", "index.html"));
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`)
});


