var express = require('express');
var bodyParser = require('body-parser');

var {mongoose} = require('./db/mongoose');
var {ToDo} = require('./models/todo');
var {Users} = require('./models/users');

const {ObjectID} = require('mongodb');

app = express();
app.use(bodyParser.json());
app.post('/todos', (req, res) => {
  console.log(req.body);
  var todo = new ToDo({
    text: req.body.text
  });
  todo.save().then((doc) =>{
    res.send(doc);
  }, (e) => {
    res.status(400).send(e);
  });
});

app.get('/todos', (req, res) => {
  ToDo.find().then((todos) => {
    res.send({todos});
  },(e) => {
    res.status(400).send(e);
  })
});

app.get('/todos/:id', (req, res) => {
  var id = req.params.id;
  if(!ObjectID.isValid(id)){
    return res.status(400).send('Not a valid ID.');
  }
  ToDo.findById(id).then((todo) => {
    if(!todo){
      return res.status(400).send('Not found');
    }
    res.send(JSON.stringify(todo, undefined, 2));
  }).catch((e) => {
    res.status(400).send(e);
  });
});


app.listen(3000, () => {
  console.log('Server is up on port 3000');
});
module.exports = {app};
