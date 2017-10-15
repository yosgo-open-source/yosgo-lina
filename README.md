### Brief
Easy to play with yosgo-lina. You can
* [x] `initialize`: Initialize api resquest
* [ ] `createBrand`: Create your brands. Each brand has own products.
* [ ] `fetchBrand`: Get your exist own brands
* [ ] `createrProduct`: Create your own proudct
* [ ] `fetchProduct`: Get your exist products
* [ ] `createGroup`: Create a group
* [ ] `fetchGroup`: Get your exist groups
* [x] `orderCreate`: Join the group and create a order
* [ ] `fetchOrders`: Get your exist orders
* [x] `createPayment`: Create a payment for certain order
* [ ] `fetchPayments`: Get your exist payments

### Before starting

1. Sign up yosgo developer to get apiKey.
2. Keep the apikey safe and use at server side.

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

### Todos
* [x] Import success within other project and work
* [x] Enable to create axios(init)
* [x] Enable to create order with yosgo api
* [x] Refactor with ES6
* [x] Use classes ES6 to build sdk
* [ ] Able to validate params of createOrder

### Build npm module resources
* [Basic docs](https://docs.npmjs.com/getting-started/creating-node-modules)
* [Create npm module example](https://quickleft.com/blog/creating-and-publishing-a-node-js-module/)
* [Create npm module with ES6](https://booker.codes/how-to-build-and-publish-es6-npm-modules-today-with-babel/)
* [Module ES6 export](http://www.cnblogs.com/diligenceday/p/5503777.html)
* [Classes](https://googlechrome.github.io/samples/classes-es6/)
* [Npm link](https://docs.npmjs.com/cli/link)
* [Npm package rename](https://stackoverflow.com/questions/28371669/renaming-a-published-npm-module)
* [Promise note](http://www.cnblogs.com/rubylouvre/p/3495286.html)


### Dev note
* Payment request should use at yosgo api production env.