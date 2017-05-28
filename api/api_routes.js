/**
 * Created by buwan on 5/22/2017.
 */
// import models
var express = require('express');
var mainController = require('../controllers/mainController');
var router = express.Router();

router.route('/getReservations').get(mainController.getReservations);
router.route('/makeReservations').post(mainController.makeReservations);
router.route('/updateReservation').post(mainController.updateReservation);
router.route('/deleteReservation').post(mainController.deleteReservation);
router.route('/getOccupations').get(mainController.getOccupations);
router.route('/addUser').post(mainController.addUser);
router.route('/getUser').post(mainController.getUser);
router.route('/getHotels').get(mainController.getHotels);
router.route('/searchHotels').post(mainController.searchHotels);

module.exports = router;