var mongoose = require('mongoose');

var Users = mongoose.model('Users',{
  name:{
    type: String,
    required: true,
    minlength: 4,
    trim: true
  },
  age:{
    type: Number,
    required: true
  },
  location:{
    type: String,
    default: 'not specified'
  }
});
module.exports = {Users};
