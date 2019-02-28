const mongoose = require('mongoose');
const dbAccess=require('./db/db-access');

mongoose.Promise=global.Promise;

//DATABASE CONNECTION.....
mongoose.connect('mongodb://localhost:27017/infoContainer',{useNewUrlParser: true});



function addInfo(userinfo){
    dbAccess.addInfo(userinfo);
}


function fetchInfoByName(name){
    console.log(name);
     dbAccess.fetchInfoByName(name);
}



module.exports={
    addInfo,
    fetchInfoByName
}

