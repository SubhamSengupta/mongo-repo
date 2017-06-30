const {MongoClient} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
  if(err) {
    return console.log('Unable to connect to MongoDB server.');
  }
  console.log("Connected to MongoDB server.");
  // db.collection('Todos').insertOne({
  //   text: 'Some text here',
  //   completed: false
  // }, (err, result) => {
  //   if(err) {
  //     return console.log('Unable to insert todos');
  //   }
  //   console.log(JSON.stringify(result.ops, undefined, 2));
  // });

  // db.collection('Users').insertOne({
  //   name: 'Subham',
  //   age: 23,
  //   location: 'Tamluk'
  // }, (err, result) => {
  //   if(err) {
  //     return console.log('Unable to insert record');
  //   }
  //   console.log(JSON.stringify(result.ops, undefined, 2));
  // });
  db.collection('Users').find({name: 'Subham'}).toArray().then((result) => {
    console.log(JSON.stringify(result, undefined, 2));
  }, (err) => {
    console.log('Unable to fetch data from DB',err);
  });


  //db.close();
});
