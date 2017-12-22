const mongoose = require('mongoose');
let Schema = mongoose.Schema;

const UserSchema = Schema({
  username : String,
  role: {
    type: String,
    default: 'user',
  },
  points: {
    type: Number,
    default: 0,
  }

});

const User = mongoose.model('User', UserSchema);
module.exports = {User};