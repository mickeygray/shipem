const mongoose = require('mongoose');

const LeadSchema = mongoose.Schema({

    name: {
        type: String
    },
    address: {
        type: String
    },
    phone:{
        type: String
    },
    email: {
        type: String
    },
    lexId:{
        type: String
    },
    compliant:{
        type: String
    }, 
    filingStatus: {
        Type: String
    }, 
    cpa: {
       Type: String
    },
    city:{ 
        type: String
    },
    state:{
        type: String,
    },
    zip: {
        type: String
    },
    plaintiff: {
        type:String
    },
    amount:{
        type:String
    },
    lienid:{
        type:String
    },
    callid:{
        type:String
    },
    ssn:{
        type:String
    },
    notes:{
        type:[]
    },
    tasks: {
        type:[]
    },
    createdate:{
        type:Date,
        default: Date.now() 
    },
    claimedBy:{
        type:{type: mongoose.Schema.Types.ObjectId, ref: 'User'}
    },
    createdBy:{
        type:{type: mongoose.Schema.Types.ObjectId, ref: 'User'}
    },
    isClaimed:{
        default: false
    },
    isClosed:{
        default: false
    },
    isPaid:{
        default: false
    }                  

});

module.exports = mongoose.model('lead', LeadSchema);