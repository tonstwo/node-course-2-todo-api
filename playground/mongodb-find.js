// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db)=>{
    if(err){
        return console.log('Unable to connect to MongoDB server.');
    }
    console.log('Connected to MongoDB server.');

    // db.collection('Todos').find({
    //     _id: new ObjectID('58a42d451115b77d09c80c6c')
    // }).toArray().then((docs)=>{
    //     console.log('Todos');
    //     console.log(JSON.stringify(docs, undefined, 2));
    // }, (err)=>{
    //     console.log('Unable to fetch todos', err);
    // });

    // db.collection('Todos').find().count().then((count)=>{
    //     console.log(`Todos count: ${count}`);
    // }, (err)=>{
    //     console.log('Unable to fetch todos', err);
    // });

    db.collection('Users').find({location:'East Blue'}).toArray().then((docs)=>{
        console.log('Found user');
        console.log(JSON.stringify(docs, undefined, 2));
    }, (err)=>{
        console.log('Unable to fetch user', err);
    });

    // INSERT MANY
    // db.collection('Users').insertMany([
    //     {
    //         name: 'Johnny',
    //         age: 25,
    //         location: 'East Blue'
    //     },
    //     {
    //         name: 'Yosaku',
    //         age: 24,
    //         location: 'East Blue'
    //     },
    //     {
    //         name: 'Sanji',
    //         age: 21,
    //         location: 'North Blue'
    //     }
    // ]).then((docs)=>{
    //     console.log('Users');
    //     console.log(JSON.stringify(docs, undefined, 2));
    // }, ()=>{
    //     console.log('Unable to fetch users', err);
    // });

    db.close();
})