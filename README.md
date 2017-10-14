### Brief
Easy to play with yosgo-lina
* [x] initialize: Initialize api resquest
* [ ] createrProduct: Create your own proudct
* [ ] createGroup: Create a group
* [x] orderCreate: Join the group and create a order
* [ ] createPayment: Create a payment for certain order

### Before starting

1. Get the yosgo developer member to get yosgo apikey
2. Keep the apikey safe. Don't show on the frontEnd or send request on frontEnd

### Demo

1. install
```
yarn add yosgo-lina
```

2. import and initialize
```
import yosgo from 'yosgo-lina';
let yosgo_SDK = new yosgo('APIURL', 'YOURAPIKEY');
```

3. orderCreate
```
yosgo_SDK.orderCreate(PRODUCTID, GROUPID, REGISTRATION, EXTRAREGISTRATION, QUANTITY);
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
