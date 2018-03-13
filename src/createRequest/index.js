const axios = require('axios');

const createRequest = ({ apiKey, mode }) =>
  axios.create({
    baseURL:
      mode === 'test'
        ? 'https://yosgo-api-policer-dev.herokuapp.com/_api/v1/'
        : 'https://yosgo-api-policer.herokuapp.com/_api/v1/',
    timeout: 20000,
    headers: {
      'content-type': 'application/json',
      'yosgo-api-key': apiKey
    }
  });

module.exports = createRequest;
