### Brief

This SDK is for yosgo lina api. Easy way to develop LINA application.

### Usage

```javascript
const LINA = require('../src');

const lina = new LINA({
  apiKey: YOUR_API_KEY,
  mode: 'test'
});
lina.getProducts().then(r => console.log(r));
```

### CHANGE API

createRequest => move createRequest to outer file

brandsFetch => getBrands

productsFetch => getProducts(:id?)

~~~productsFetch~~~

groupCreate => createGroup

groupFetch => getGroup

orderCreate => createOrder

ordersFetch => getOrders

paymentCreate => createPayment

### ADD API

getRules

createRules
