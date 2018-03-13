### Brief

Easy to play with yosgo-lina. You can

* [x] `createRequest`: Basic setup request
* [x] `brandsFetch`: Get list of brands
* [x] `productsFetch`: Get list of products
* [x] `productsFetch(productId)`:
* [x] `groupCreate`: Create a group from a product
* [x] `groupFetch`: Get list of groups
* [x] `orderCreate`: Create an order in a group
* [x] `ordersFetch`: Get list of orders
* [x] `paymentCreate`: Create a payment for a certain order

### Before starting

1.  Sign up yosgo developer to get apiKey.
2.  Keep the apikey safe and use at server side.
3.  All method wrap with promise. You can get the response by `then((response) => //Do someting)`

### Usage

Note: Using express generator and pug be view engine. Install this module `yarn add yosgo-lina`

```
//--Step.1 Import and initialize
import yosgo from 'yosgo';
const yosgo_SDK = new yosgo('API_URL',YOUR_API_KEY);

//--Step.2 Chain methods
//Pass prodcutId, groupId, registartion, extraRegistration, quantity to `orderCreate()`.
//Pass orderId to `paymentCreate()`.
//Chain two method by nesting promise
new Promise((resolve, reject) => {
  resolve(yosgo_SDK.orderCreate(productId, groupId, registration, extraRegistration, quantity));
}).then((response) => {
  new Promise((resolve, reject) => {
    //Here the response is `orderId` returned from orderCreate()
    resolve(yosgo_SDK.paymentCreate(response))
  })
  .then((response) => {
    //Here the response is payment html form. Using `document.write()` to redirect payment page.
    //The following view is take the response to `payment` page
    res.render('payment', {form: response});
  })
})

//--Step.3 Go payment
small=Redirect to ecpay
div(data=form id="data")
script.
  document.write(document.getElementById('data').getAttribute('data'));
```

### NEW

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
