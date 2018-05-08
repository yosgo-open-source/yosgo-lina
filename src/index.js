const createRequest = require('./createRequest');

const successLog = msg =>
  console.log('[YOSGO-SDK Console ' + new Date().toISOString() + '] ' + msg);

class LINA {
  constructor({ apiKey, mode }) {
    this.apiKey = apiKey;
    this.mode = mode;
  }

  request() {
    return createRequest({ apiKey: this.apiKey, mode: this.mode });
  }

  getBrands() {
    return new Promise((resolve, reject) => {
      this.request()
        .get('/brands')
        .then(respones => {
          successLog('Fetch brands success');
          resolve(respones.data);
        });
    });
  }

  getProducts({ id: productId } = { id: undefined }) {
    return new Promise((resolve, reject) => {
      if (productId) {
        this.request()
          .get(`/products/${productId}/?forceUpdate=1`)
          .then(response => {
            successLog('Fetch certain product success');
            resolve(response.data.payload);
          });
      } else {
        this.request()
          .get('/products')
          .then(response => {
            successLog('Fetch products success');
            resolve(response.data.payload);
          });
      }
    });
  }

  getGroups(isForceUpdate) {
    return new Promise((resolve, reject) => {
      this.request()
        .get(`/groups/?forceUpdate=${isForceUpdate ? '1' : '0'}`)
        .then(response => {
          successLog('Fetch groups success');
          resolve(response.data.payload);
        });
    });
  }

  createGroup({ productId, note = '', ruleId = '' }) {
    return new Promise((resolve, reject) => {
      this.request()
        .post('/groups', {
          productId,
          note,
          ruleId
        })
        .then(responses => {
          successLog('Create Group Success');
          resolve(responses);
        });
    });
  }

  getRules() {
    return new Promise((resolve, reject) => {
      this.request()
        .get('/rules')
        .then(response => {
          successLog('Fetch rules success');
          resolve(response.data.payload);
        });
    });
  }

  createRules({ rules }) {
    return new Promise((resolve, reject) => {
      this.request()
        .post('/rules', {
          rules
        })
        .then(responses => {
          successLog('Create Rules Success');
          resolve(responses);
        });
    });
  }

  createOrder({ id: productId, groupId, buyers, quantity }) {
    return new Promise((resolve, reject) => {
      this.request()
        .post('/orders', {
          buyers,
          order: {
            quantity,
            productId,
            groupId
          }
        })
        .then(response => {
          successLog('Create order success');
          resolve(response.data.payload.objectId);
        });
    });
    // Validate
    // 1. Five params should be exist if not return required hint
    // 2. Quantity should be number if not return format hint
    // 3. Make sure product is not expired
    // 4. Make sure group's quantity is enough or not
  }

  getOrders() {
    return new Promise((resolve, reject) => {
      this.request()
        .get('/orders')
        .then(response => {
          successLog('Fetch orders success');
          resolve(response.data.payload);
        });
    });
  }

  createPayment({ id: orderId, next = '' }) {
    return new Promise((resolve, reject) => {
      this.request()
        .post('/orders/payment', {
          orderId,
          next
        })
        .then(response => {
          successLog('Create payment success');
          resolve(response.data.payload.order.payment.data.html);
        });
    });
  }
}

module.exports = LINA;
