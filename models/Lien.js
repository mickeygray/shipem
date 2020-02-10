const mongoose = require('mongoose');

const LienSchema = mongoose.Schema({
    name: {
        type: String
    },

    filetype: {
        type: String

    },
    address: {
        type: String

    },
    city: {
        type: String

    },
    state: {
        type: String

    },
    zip: {
        type: String

    },
    plaintiff: {
        type: String

    },
    amount: {
        type: String

    },
    county: {
        type: String

    },    
    loaddate: {
        type: Date
    },
    filingdate: {
        type: Date
    },
    _id: {
        type: mongoose.Schema.Types.ObjectId,
        isRequired: true,
    },
    lexid: {
        type: String
    }


});

module.exports = mongoose.model('lien', LienSchema);