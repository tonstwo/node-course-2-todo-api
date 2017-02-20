const {ObjectID} = require('mongodb');

const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');

// Todo.remove({}).then((result)=>{
//     console.log(result);
// });

// Todo.findOneAndRemove
// Todo.findByIdAndRemove

Todo.findByIdAndRemove('58aad2942872da64180992d6').then((todo) => {
    console.log(todo);
});

// Todo.findOneAndRemove({_id: '58aad2942872da64180992d6'}).then((todo) => {

// });