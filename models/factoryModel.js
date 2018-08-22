var mongoose = require('mongoose');

// define the schema for our user model
var factorySchema = mongoose.Schema({

        factoryTitle: String,
        minValue: Number,
        maxValue: Number,
        children: Array

});

// methods ======================


// create the model for users and expose it to our app
module.exports = mongoose.model('Factory', factorySchema);
