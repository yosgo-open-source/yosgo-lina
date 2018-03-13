/**
 * If you want to test this sdk,
 * don't forget to copy this file,
 * and change name into `lina.js`.
 */

const LINA = require('../src');

const lina = new LINA({
  apiKey: YOUR_API_KEY,
  mode: 'test'
});
lina.getProducts().then(r => console.log(r));
