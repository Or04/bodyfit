
var mongoose = require('mongoose');

var blockListSchema = new mongoose.Schema({
    "upper": Number,
    "middle": Number,
    "lower": Number
});

module.exports = blockListSchema;