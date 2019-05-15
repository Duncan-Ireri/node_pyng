const mongoose = require('mongoose');

const Schema = mongoose.Schema;

let QuotesSchema = new Schema({
    name: {type: String, required: true, max: 100},
    quote: {type: String, required: true, max: 300},
});

var Quote = module.exports = mongoose.model('quote', QuotesSchema);

module.exports.get = function (callback, limit) {
    Quote.find(callback).limit(limit);
}