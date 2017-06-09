var express = require('express');
var router = express.Router();
var passport = require('passport');

const apiController = require('../controllers/apiController');

router.get('/users/:id', apiController.getUser);
router.get('/me', apiController.checkForUser);
router.get('/cities', apiController.allCities);
router.get('/cities/:cityurl', apiController.findCity);
router.post('/cities/:cityurl', apiController.addCityReck);
router.put('/cities/:cityurl/:reckid', apiController.updateVote);

module.exports = router;