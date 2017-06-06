var mongoose = require('mongoose');
const Schema = mongoose.Schema;

var commentSchema = new Schema ({
  googleID: String,
  name: String,
  comment: String,
  created: { type: Date, default: Date.now }
});
 
var reckSchema = new Schema ({
  name: String,
  image: String,
  address: String,
  description: String,
  type: {type: String, enum:["activity", "restaurant", "bar", "nightclub", "museum & culture", "hotel"]},
  votecount: Number,
  comments: [commentSchema],
  created: { type: Date, default: Date.now }
});

var eventSchema = new Schema ({
  name: String,
  month: { type: Number, enum: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12] },
  blurb: String
});

var citySchema = new Schema({
    city: String,
    cityurl: String,
    country: String,
    continent: String,
    region: [String],
    tags: [String],
    heximg: String,
    img: String,
    data: {
        spotlights: [reckSchema],
        recks: [reckSchema],
        instagram: [String],
        events: [eventSchema],
        nextstops: [String],
        reqreading: [String],
        transportation: [String],
        neighborhoods: [String],
        needtoknow: [String]
    }
 });

module.exports = mongoose.model('City', citySchema);