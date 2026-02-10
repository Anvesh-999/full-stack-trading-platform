const {model} = require('mongoose');
const positionsSchema = require('../schemas/HoldingsSchema');

const PositionsModel = model('Position', positionsSchema);

module.exports = PositionsModel;