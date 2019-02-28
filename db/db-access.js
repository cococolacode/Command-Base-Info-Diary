
//IMPORTING MODELS
const Info=require('../models/Info');



//ADD USERS
const addInfo=(info)=>{
const newInfo=new Info(info);
newInfo.save().then((docs)=>{
console.log(`your information has been saved saved`);
},(err)=>{
    throw err;
});

}

const fetchInfoByName=(name)=>{

    //making case sensitive
     const search = new RegExp(name,'i');
     Info.find({$or:[{firstname:search},{lastname:search}]})
     .then(info=>{
         console.log(info);
     })

}


module.exports={
    addInfo,
    fetchInfoByName
}