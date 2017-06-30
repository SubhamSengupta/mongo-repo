const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp',(err, db) => {
  if(err) {
    return console.log('Unable to connect to MongoDB',err);
  }
  console.log('Connected to MongoDB');

  db.collection('Users').findOneAndUpdate({
    name: 'Soumen'
  }, {
    $set:{
      name: 'Subham',
      location: 'Narghat',
      pin: 721669
    },$inc:{
      age: 1
    }
  }, {
      returnOriginal: false
  }).then((result) =>{
    console.log(JSON.stringify(result, undefined, 2));
  });

  
//db.close();
});
