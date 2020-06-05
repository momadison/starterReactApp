const express = require('express');
const bodyParser = require('body-parser');
const axios = require('axios');

const app = express();
// app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
let sessionID = '';

app.post('/api/greeting', (req, res) => {
  axios({
    method: 'post',
    url: '',
    data: { ip: '0.0.0.0' },
  }).then(
    response => {
      console.log(response.data);
      res.json(response.data);
    },
    error => {
      console.log(error.data);
    }
  );
});

app.get('/api/validation/:id', (req, res) => {
  axios({
    method: 'get',
    url: '' + req.params.id + '/status',
  }).then(
    response => {
      console.log('server validation response: ', response.data);
      res.send(response.data);
    },
    error => {
      console.log('YOU DO NOT HAVE ACCESS');
      res.send('REJECTED.  HOW DOES IT FEEL');
      // console.log(error)
    }
  );
});

app.listen(3001, () =>
  console.log('Express server is running on localhost:3001')
);
