#!/usr/bin/env node

const mongoose=require('mongoose');
const program= require('commander');
const {prompt}=require('inquirer');
const {
    addInfo,
    fetchInfoByName,
    listAllInfo,
    updateInfo,
    removeInfo
} = require('./db/db-access');

//DATABASE CONNECTION
mongoose.connect('mongodb://localhost:27017/infoContainer',{useNewUrlParser:true});




//user questions for adding information
const question=[
    {
        type:'input',
        name:'firstname',
        message:'first name'
    },

    {
        type:'input',
        name:'lastname',
        message:'users last name'
    },

    {
        type:'input',
        name:'email',
        message:'users email '
    },

    {
        type:'input',
        name:'phone',
        message:'users phone number'
    },

    {
        type:'input',
        name:'address',
        message:'users address'
    }
]


program
.version('1.0.0')
.description('information saving system')


/*
ADDING IMFORMATION
*/
program
.command('add')
.alias('a')
.description('add a user')
.action(()=>{
    prompt(question).then((answer)=> addInfo(answer));
})

/*
FINDING INFORMATION 
*/
program
.command('find <name>')
.alias('f')
.description('find information by name')
.action(name=>fetchInfoByName(name))


/*
LISTING ALL INFORMATIONS
*/
program
  .command('list')
  .alias('l')
  .description('listing all informations')
  .action(()=>listAllInfo())


  /*
   DELETETING COMMAND
  */
 program
 .command('remove <_id>')
 .alias('d')
 .description('deleting info by id')
 .action(_id=>{
     removeInfo(_id);
 })


//UPDATING INFORMATION
program
.command('update <_id>')
.alias('u')
.description('updating information')
.action((_id)=>{
    prompt(question).then(answer=>updateInfo(_id,answer));
})




program.parse(process.argv);
