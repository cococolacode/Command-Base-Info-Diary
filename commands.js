const program= require('commander');
const {prompt}=require('inquirer');
const {addInfo,fetchInfoByName} = require('./server');


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




// program
// .command('add <firstname> <lastname> <email> <phone> <address>')
// .alias('a')
// .description('add a user information')
// .action((firstname,lastname,email,phone,address)=>{
//       addUser({firstname,lastname,email,phone,address});
// });


//ADDING IMFORMATION
program
.command('add')
.alias('a')
.description('add a user')
.action(()=>{
    prompt(question).then((answer)=> addInfo(answer));
})


//FINDING INFORMATION 
program
.command('find <name>')
.alias('f')
.description('find all users')
.action(name=>fetchInfoByName(name))


program.parse(process.argv);