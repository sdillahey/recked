var express = require('express');
var router = express.Router();

const apiController = require('../controllers/apiController');

router.get('/users/:id', apiController.getUser);
router.get('/me', apiController.checkForUser);
router.get('/cities', apiController.allCities);
router.get('/cities/:cityurl', apiController.findCity);
router.post('/cities/:cityurl', checkAuth, apiController.addCityReck);
router.put('/cities/:cityurl/:id/:userid', apiController.updateVote);

function checkAuth(req, res, next) {
    if (req.user) return next();
    res.redirect(303, '/auth/google');
}

module.exports = router;