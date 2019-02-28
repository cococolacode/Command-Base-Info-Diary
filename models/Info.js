const mongoose = require('mongoose');


//USERS SCHEMA
const infoSchema = mongoose.Schema(
    {
        firstname: { type: String },
        lastname: { type: String },
        email: {type: String },
        phone: {type: String },
        address: {type: String }
    }
)

//DEFINE AND EXPORT
module.exports=mongoose.model('std_info',infoSchema);