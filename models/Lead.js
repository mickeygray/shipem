const mongoose = require('mongoose');

const LeadSchema = mongoose.Schema({

    name: {
        type: String
    },
    address: {
        type: String
    },
    phone:{
        type: String,
        required: true,
        unique: true
    },
    email: {
        type: String
    },
    lexid:{
        type: String
    },
    compliant:{
        default: 'non-compliant'
    }, 
    filingStatus: {
        default: 'single'
    }, 
    cpa: {
        default: 'no-cpa'
    }

});

module.exports = mongoose.model('lead', LeadSchema);