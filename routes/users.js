const mongoose = require('mongoose');
const plm = require('passport-local-mongoose');

mongoose.connect("mongodb://127.0.0.1:27017/psycheck")

const userSchema = new mongoose.Schema({
  fullname: {
    type: String,
    required: true
  },
  username: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  profileimage:{
    type: String,
    default: "default.png"
  },
  reports: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Report',
    }
  ],
  usertype: { type: String, enum: ['user', 'admin'], default: 'user' },
  contacts: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Contacts',
    }
  ]
  
});

userSchema.plugin(plm);

module.exports = mongoose.model('User', userSchema);


