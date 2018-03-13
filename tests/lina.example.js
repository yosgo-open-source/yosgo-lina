const LINA = require('../src');

const lina = new LINA({
  apiKey: YOUR_API_KEY,
  mode: 'test'
});
lina.getProducts().then(r => console.log(r));
