import axios from 'axios';
// import R from 'ramda';

export default class Yosgo {
  constructor(baseApiURL, apiKey) {
    this.baseApiURL = baseApiURL,
    this.apiKey = apiKey,
    this.initialize = this.initialize.bind(this)
  }

  initialize() {
    const axiosInit = axios.create({
      baseURL: this.baseApiURL,
      timeout: 2000,
      headers: {
        'content-type': 'application/json',
        'yosgo-api-key': this.apiKey
      }
    })
    return axiosInit;
  }

  brandFetch() {
    return new Promise((resolve, reject) => {
      this.initialize().get('/brands').then((respones) => {
        console.log('[Console] Fetch brands success -> ', respones.data);
        resolve(respones.data);
      })
    })
  }

  productFetch() {
    return new Promise((resolve, reject) => {
      this.initialize().get('/products').then((response) => {
        console.log('[Console] Fetch products success -> ', response.data);
        resolve(response.data);
      })
    })
  }

  orderCreate(productId, groupId, data, extraData, quantity) {
    return new Promise((resolve, reject) => {
      this.initialize().post('/orders', {
        registration: {
          name: data.name,
          phone: data.phone,
          email: data.email,
          notes: "",
          address: ""
        },
        extraRegistrations: extraData,
        order: {
          quantity,
          product: {
            __type: "Pointer",
            className: "Product",
            objectId: productId
          },
          data: {
            groupId: groupId
          }
        }
      }).then((respones) => {
        console.log('[Console] -> create order success. OrderId:', respones.data.objectId);
        resolve(respones.data.objectId);
      }).catch((error) => {
        console.log('[Console] -> create order fail', error);
        resolve(error);
      })
    })
    // Validate
    // 1. Five params should be exist if not return required hint
    // 2. Quantity should be number if not return format hint
  }

  paymentCreate(orderId) {
    return new Promise((resolve, reject) => {
      this.initialize().post('/orders/payment', {
        orderId
      }).then((response) => {
        console.log('[Console] -> create payment success', response.data.data.order.payment.data.html);
        resolve(response.data.data.order.payment.data.html);
      }).catch((error) => {
        console.log('[Console] -> create payment fail');
        resolve(error);
      })
    })
  }
}