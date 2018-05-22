const axios = require('axios');

const createRequest = ({ apiKey, mode }) =>
  axios.create({
    baseURL:
      mode === 'test'
        ? 'https://awsapi.yosgo.com/_api/v1/'
        : 'https://awsapi.yosgo.com/_api/v1/',
    timeout: 20000,
    headers: {
      'content-type': 'application/json',
      'yosgo-api-key': apiKey
    }
  });

module.exports = createRequest;
