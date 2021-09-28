module.exports = {


  friendlyName: 'Simplepostcontroller',


  description: 'Simplepostcontroller something.',


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


  fn: async function (req, res, inputs) {
    console.log(req.params)
    if(!inputs.userId || !inputs.products) {
      uId = -1
      products = [{name: 'Pencil', price: '1000'}]
      console.log(uId, products)
    } else {
      uId = inputs.userId
      products = inputs.products
      console.log(uId, products)
    }
    
    return { userId: uId, products: products};
  }
};
