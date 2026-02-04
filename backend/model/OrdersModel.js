const {model} = require('mongoose');
const OrdersSchema = require('../schemas/HoldingsSchema');

const OrdersModel = model('Order', OrdersSchema);

module.exports = OrdersModel;