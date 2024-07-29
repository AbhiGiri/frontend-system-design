const express = require('express');
const bodyParser = require('body-parser');
const client = require('./client');

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

app.get('/', (req, res) => {
  client.getAll(null, (err, data) => {
    if(!err) {
      res.send(data.customers);
    }
  })
});

app.post('/post', () => {

})
app.post('/update', () => {

})
app.post('/remove', () => {

})

const PORT = process.env.PORT || 4005;

app.listen(PORT, () => {
  console.log("server is running at port:", PORT);
});