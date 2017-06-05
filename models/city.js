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

var commentSchema = new Schema ({
  googleID: String,
  name: String,
  comment: String,
  created: { type: Date, default: Date.now }
})

var eventSchema = new Schema ({
  name: String,
  month: { type: Number, enum: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12] },
  blurb: String
})

var citySchema = new Schema({
    city: String,
    country: String,
    continent: String,
    region: [String],
    tags: [String],
    heximg: String,
    img: String,
    recs: {
        activities: [reckSchema],
        restaurants: [reckSchema],
        hotels: [reckSchema],
        instagram: [String],
        events: [eventSchema],
        nextstops: [String],
        reqreading: [String],
        transportation: [String],
        needtoknow: [String]
    }
 });

module.exports = mongoose.model('City', citySchema);