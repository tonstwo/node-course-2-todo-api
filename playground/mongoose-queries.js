const {ObjectID} = require('mongodb');

const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');

// var id = '58a9a3a09f300f469ba4f6e51';

// if(!ObjectID.isValid(id)){
//     console.log('ID not valid');
// }
// Todo.find({
//     _id: id
// }).then((todos)=>{
//     console.log('Todos', todos);
// });

// Todo.findOne({
//     _id: id
// }).then((todo)=>{
//     console.log('Todo', todo);
// });

// Todo.findById(id).then((todoById)=>{
//     if(!todoById){
//         return console.log('Id not found');
//     }
//     console.log('Todo By Id', todoById);
// }).catch((e)=>console.log(e));
var id = '58aa8f752872da6418098942';

if(!ObjectID.isValid(id)){
    console.log('Id not valid');
}

User.findById(id).then((userbyid)=>{
    if(!userbyid){
        return console.log(`User with ID:${id} not found.`);
    }
    console.log('User By ID:')
    console.log(JSON.stringify(userbyid, undefined, 2));
}).catch((e)=>console.log(e));