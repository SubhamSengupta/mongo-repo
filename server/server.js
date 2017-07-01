var express = require('express');
var bodyParser = require('body-parser');

var {mongoose} = require('./db/mongoose');
var {ToDo} = require('./models/todo');
var {Users} = require('./models/users');

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
    res.send(e);
  });
});


app.listen(3000, () => {
  console.log('Server is up on port 3000');
});
