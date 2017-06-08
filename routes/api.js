var express = require('express');
var router = express.Router();

const apiController = require('../controllers/apiController');

router.get('/users/:id', apiController.getUser);
router.get('/me', apiController.loggedInUser);
router.get('/cities', apiController.allCities);
router.get('/cities/:cityurl', apiController.findCity);
router.post('/cities/:cityurl', apiController.addCityReck);

module.exports = router;