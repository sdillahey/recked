const User = require('../models/user');
const City = require('../models/city');

function getUser(req, res) {
  User.findById(req.params.id, function(err, user){
    if (err) return res.status(500).json({msg: err});
    res.status(200).json(user);
  });
}

function allCities(req, res) {
  City.find({}, function(err, cities){
    if (err) return res.status(500).json({msg: err});
    res.status(200).json(cities);
  });
}

function findCity(req, res) {
  City.findOne({'cityurl': req.params.cityurl}, function(err, city){
    if (err) return res.status(500).json({msg: err});
    res.status(200).json(city);
  });
}

function checkForUser(req, res){
  res.json(req.user);
}

function addCityReck(req, res) {
  City.findOne({'cityurl': req.params.cityurl}, function(err, city){
      if (err) return res.status(500).json({msg: err});
      city.data.recks.push(req.body);
      city.save(err => {
        if (err) return res.status(500).json({msg: err});
        res.json(city);
      })
  }) 
}

// To display a user's board for a city
function showReckList(req, res) {
    //or can I just do getUser.. res.boards
}

function updateVote(req, res) {
  City.findOne({'cityurl': req.params.cityurl}, function(err, city) {
      let reck = city.data.recks.id(req.params.id)
      console.log('body', req.body, req.json);
      reck.votecount = req.body.upvote ? ++reck.votecount: --reck.votecount;
      city.save(err => {
        if (err) return res.status(500).json({msg: err});
        res.json(city);
      })
  })
}

const apiController = {
    getUser,
    allCities,
    findCity,
    checkForUser,
    addCityReck, 
    updateVote
}

module.exports = apiController;