### Brief

This SDK is for yosgo lina api. Easy way to develop LINA application.

All the API are async, so you should use Promise or async/await for the SDK.

### Installation

```
> npm install yosgo-lina
```

### Usage

```javascript
const LINA = require('yosgo-lina');

const lina = new LINA({
  apiKey: YOUR_API_KEY,
  mode: 'test'
});

lina.getProducts().then(response => console.log(response));
```

### API

getBrands: Promise

#### Product

getProducts(:id?): Promise

#### Group

createGroup: Promise

getGroup: Promise

#### Order

createOrder: Promise

getOrders: Promise

#### Payment

createPayment: Promise

#### Rule

createRules: Promise

getRules: Promise
