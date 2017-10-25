import axios from 'axios';
// import R from 'ramda';

export default class Yosgo {
  constructor(baseApiURL, apiKey) {
    this.baseApiURL = baseApiURL,
    this.apiKey = apiKey,
    this.createRequest = this.createRequest.bind(this)
  }

  createRequest() {
    const axiosInit = axios.create({
      baseURL: this.baseApiURL,
      timeout: 20000,
      headers: {
        'content-type': 'application/json',
        'yosgo-api-key': this.apiKey
      }
    })
    return axiosInit;
  }

  brandFetch() {
    return new Promise((resolve, reject) => {
      this.createRequest().get('/brands').then((respones) => {
        console.log('[Console] Fetch brands success -> ', respones.data);
        resolve(respones.data);
      })
    })
  }

  productsFetch() {
    return new Promise((resolve, reject) => {
      this.createRequest().get('/products').then((response) => {
        console.log('[Console] Fetch products success');
        resolve(response.data.payload);
      })
    })
  }

  productFetch(productId) {
    return new Promise((resolve, reject) => {
      this.createRequest().get(`/products/${productId}`).then((response) => {
        console.log('[Console] Fetch certain product success');
        resolve(response.data.payload);
      })
    })
  }

  groupCreate(productId, note) {
    return new Promise((resolve, reject) => {
      this.createRequest().post('/groups', {
        productId,
        note,
      }).then((responses) => {
        console.log('[Console] Create Group Success');
        resolve(responses);
      })
    })
  }

  groupsFetch() {
    return new Promise((resolve, reject) => {
      this.createRequest().get('/groups').then((response) => {
        console.log('[Console] Fetch groups success');
        resolve(response.data.payload);
      })
    })
  }

  orderCreate(productId, groupId, data, extraRegistrations, quantity) {
    return new Promise((resolve, reject) => {
      this.createRequest().post('/orders', {
        registration: {
          name: data.name,
          phone: data.phone,
          email: data.email,
          notes: data.notes,
          address: data.address,
        },
        extraRegistrations,
        order: {
          quantity,
          productId,
          groupId
        }
      }).then((response) => {
        console.log('[Console] Create order success');
        resolve(response.data.payload.objectId);
      })
    })
    // Validate
    // 1. Five params should be exist if not return required hint
    // 2. Quantity should be number if not return format hint
    // 3. Make sure product is not expired
    // 4. Make sure group's quantity is enough or not
  }

  ordersFetch() {
    return new Promise((resolve, reject) => {
      this.createRequest().get('/orders').then((response) => {
        console.log('[Console] Fetch orders success');
        resolve(response.data.payload);
      })
    })
  }

  paymentCreate(orderId) {
    return new Promise((resolve, reject) => {
      this.createRequest().post('/orders/payment', {
        orderId
      }).then((response) => {
        console.log('[Console] Create payment success');
        resolve(response.data.payload.order.payment.data.html);
      })
    })
  }
}