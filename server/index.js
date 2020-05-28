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
    url: 'https://ibm-equifax-services.mybluemix.net/api/identity-sessions',
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
    url:
      'https://ibm-equifax-services.mybluemix.net/api/identity-sessions/' +
      req.params.id +
      '/status',
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

app.post('/api/consent/:id', (req, res) => {
  console.log('consent post request: ', req.body);

  axios({
    method: 'post',
    url:
      'https://ibm-equifax-services.mybluemix.net/api/identity-sessions/' +
      req.params.id +
      '/consent',
    data: req.body,
  }).then(
    response => {
      console.log('server consent response: ', response.data);
      res.send(response.data);
    },
    error => {
      console.log(error);
    }
  );
});

app.post('/api/identity/:id', (req, res) => {
  console.log('identity post request: ', req.body);

  axios({
    method: 'post',
    url:
      'https://ibm-equifax-services.mybluemix.net/api/identity-sessions/' +
      req.params.id +
      '/identity',
    data: req.body,
  }).then(
    response => {
      console.log('server identity response: ', response.data);
      res.send(response.data);
    },
    error => {
      console.log(error);
    }
  );
});

app.post('/api/sendmobile/:id', (req, res) => {
  console.log('sendmobile post request: ', req.body);

  axios({
    method: 'post',
    url:
      'https://ibm-equifax-services.mybluemix.net/api/identity-sessions/' +
      req.params.id +
      '/send-otp',
    data: req.body,
  }).then(
    response => {
      console.log('server sendmobile response: ', response.data);
      res.send(response.data);
    },
    error => {
      console.log(error);
    }
  );
});

app.post('/api/passcode/:id', (req, res) => {
  console.log('sendpasscode post request: ', req.body);

  axios({
    method: 'post',
    url:
      'https://ibm-equifax-services.mybluemix.net/api/identity-sessions/' +
      req.params.id +
      '/validate-otp',
    data: req.body,
  }).then(
    response => {
      console.log('server sendpasscode response: ', response.data);
      res.send(response.data);
    },
    error => {
      console.log('error');
    }
  );
});

app.listen(3001, () =>
  console.log('Express server is running on localhost:3001')
);
