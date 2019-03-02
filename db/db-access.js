
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

//FETCHING INFORMATION BY NAME 
const fetchInfoByName=(name)=>{

    //making case sensitive
     const search = new RegExp(name,'i');
     Info.find({$or:[{firstname:search},{lastname:search}]})
     .then(info=>{
         console.log(info);
     })

}

//DELETING INFORMATION
const deleteInfo=(_id)=>{
    Info.deleteOne({_id})
    .then(info=>{
        console.log("deleted info");
    })
}



//LISTING ALL INFORMATIONS
const listAllInfo=()=>{
  Info.find()
  .then(info =>{
      info.forEach( value=> {
           console.log(value); 
      });
  
  })
}

//UPDATING INFORMATION
const updateInfo=(_id,info)=>{
Info.update({_id},info)
.then(info=>{
    console.log('your info has been udated')
})
}


//Removing INFORMATION
const removeInfo=(_id)=>{
    Info.deleteOne({_id})
    .then(info=>{
        console.log('your info has been removed')
    })
    }

//update users
const updateUsers= (_id,name)=>{
    Info.updateOne({_id},info)
    .then(info =>{
        console.info('info updated');
    })
}



module.exports={
    addInfo,
    fetchInfoByName,
    listAllInfo,
    updateInfo,
    removeInfo
}
