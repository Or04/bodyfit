var mongoose = require('mongoose'),
    blockListSchema = require('./block-list-schema');

var user = new mongoose.Schema({
    "full_name": String,
    "password": String,
    "email": String,
    "block_list": blockListSchema,
    "long": Number,
    "short": Number
}, {collection: 'users'});

var newUser = mongoose.model('newUser', user);
module.exports = newUser;