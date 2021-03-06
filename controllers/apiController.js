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
}

function updateVote(req, res) {
  City.findOne({'cityurl': req.params.cityurl}, function(err, city) {
      let reck = city.data.recks.id(req.params.reckid)
      if (reck.uservotes.includes(req.body.user)) return;
      reck.votecount = req.body.upvote ? ++reck.votecount: --reck.votecount;
      reck.uservotes.push(req.body.user);
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