 var mongoose = require('mongoose');
 const Schema = mongoose.Schema;
 
 var userSchema = new Schema({
   name: String,
   email: String,
   avatar: String,
   googleId: String,
   boards: [],
   created: { type: Date, default: Date.now }
 });

 module.exports = mongoose.model('User', userSchema);