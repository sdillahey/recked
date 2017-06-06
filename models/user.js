var mongoose = require('mongoose');
const Schema = mongoose.Schema;

var boardreckSchema = new Schema ({
  name: String,
  image: String,
  address: String,
  description: String,
  type: {type: String, enum:["activity", "restaurant", "bar", "nightclub", "museum & culture", "hotel"]}
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
        recks: [boardreckSchema],
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