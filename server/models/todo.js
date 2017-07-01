var mongoose = require('mongoose');

var ToDo = mongoose.model('ToDo',{
  text:{
    type: String,
    required: true,
    minlength: 4,
    trim: true
  },
  completed:{
    type: Boolean,
    default: false
  },
  completedAt:{
    type: Number,
    default: null
  }
});
module.exports = {ToDo};
