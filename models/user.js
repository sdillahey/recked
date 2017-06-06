var mongoose = require('mongoose');
const Schema = mongoose.Schema;

var reckSchema = new Schema ({
  name: String,
  image: String,
  address: String,
  description: String,
  votecount: Number,
  comments: [commentSchema],
  created: { type: Date, default: Date.now }
});

var eventSchema = new Schema ({
  name: String,
  month: { type: Number, enum: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12] },
  blurb: String
});

var boardSchema = new Schema({
  // add multiple googleId's to share with friends?
  user: [String],
  city: String,
  image: String,
  data: {
        recks: [reckSchema],
        events: [eventSchema],
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