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
  City.findOne('cityurl': req.params.cityurl, function(err, city){
    if (err) return res.status(500).json({msg: err});
    res.status(200).json(city);
  });
}

// To display a user's board for a city
function showReckList(req, res) {
    //or can I just do getUser.. res.boards
}

// To 

const apiController = {
    getUser,
    allCities,
    findCity
}

module.exports = apiController;