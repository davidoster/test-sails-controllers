module.exports = {


  friendlyName: 'Simplecontroller',


  description: 'Simplecontroller something.',


  inputs: {
    userId: { type: 'number'},
    products: { type: 'string' }

  },


  exits: {
    success: {
      responseType: 'view',
      viewTemplatePath: 'pages/simple'
    }
  },


  fn: async function (inputs) {
    if(!inputs.userId || !inputs.products) {
      uId = -1
      products = "[{name: 'Pencil', price: '1000'}]"
    } else {
      uId = inputs.userId
      products = inputs.products
    }
    return { userId: uId, products: products};
  }
};
