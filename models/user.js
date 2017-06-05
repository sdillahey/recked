var mongoose = require('mongoose');
const Schema = mongoose.Schema;

var boardSchema = new Schema({
  // add multiple users to share with friends?
  users: [String],
  city: String,
  image: String,
  recs: {
        activities: [Object],
        restaurants: [Object],
        hotels: [Object],
        events: [Object],
        nextstops: [String],
        reqreading: [String],
        transportation: [String],
        needtoknow: [String]
  },
  notes: [String]
});
 
var userSchema = new Schema({
  name: String,
  email: String,
  avatar: String,
  googleId: String,
  boards: [boardSchema],
  created: { type: Date, default: Date.now }
});

module.exports = mongoose.model('User', userSchema);