/**
 * Created by buwan on 5/22/2017.
 */
var dbConnection = require('../db/dbConnection');

// define Iem model CRUD operaions
var Reservation_CRUD = {
    getReservations: function (req, res) {
        // get all reservations
        var sql = "SELECT s.id,s.name,s.date,s.count,h.name as hotel_name,h.id as hotel_id,h.image as hotel_image from reservations s, hotels h WHERE s.hotel_id = h.id";
        dbConnection.getConnection().query(sql, function (err, rows, fields) {
            if (err)
                res.send(err);
            res.json(rows);
        })
    },
    makeReservations: function (req, res) {
        var sql = "INSERT INTO reservations(name,date,count,hotel_id) VALUES('" + req.body.name + "','" + req.body.date + "','" + req.body.count + "'," + req.body.hotel_id + ")";
        dbConnection.getConnection().query(sql, function (err, rows, fields) {
            if (err)
                res.send(err);
            res.json(rows);
        })
    },
    updateReservation: function (req, res) {
        var sql = "UPDATE reservations SET name = '" + req.body.name + "',date='" + req.body.date + "',count='" + req.body.count + "' WHERE id = " + req.body.id;
        dbConnection.getConnection().query(sql, function (err, rows, fields) {
            if (err)
                res.send(err);
            res.json(rows);
        })
    },
    deleteReservation: function (req, res) {
        var sql = "DELETE FROM reservations WHERE id = " + req.body.id;
        dbConnection.getConnection().query(sql, function (err, rows, fields) {
            if (err)
                res.send(err);
            res.json(rows);
        })
    },
    getOccupations: function (req, res) {
        // get all reservations
        var sql = "SELECT * from occupations";
        dbConnection.getConnection().query(sql, function (err, rows, fields) {
            if (err)
                res.send(err);
            res.json(rows);
        })
    },
    addUser: function (req, res) {
        var sql = "INSERT INTO users(username,password,occupation,image) VALUES('" + req.body.username + "','" + req.body.password + "','" + req.body.occupation + "','" + req.body.image + "')";
        dbConnection.getConnection().query(sql, function (err, rows, fields) {
            if (err)
                res.send(err);
            res.json(rows);
        })
    },
    getUser: function (req, res) {
        var sql = "SELECT * FROM users WHERE username = '" + req.body.username + "' AND password = '" + req.body.password + "'";
        dbConnection.getConnection().query(sql, function (err, rows, fields) {
            if (err)
                res.send(err);
            res.json(rows);
        })
    },
    getHotels: function (req, res) {
        var sql = "SELECT * FROM hotels";
        dbConnection.getConnection().query(sql, function (err, rows, fields) {
            if (err)
                res.send(err);
            res.json(rows);
        })
    },
    searchHotels: function (req, res) {
        var sql = "SELECT * FROM hotels WHERE name LIKE'%" + req.body.query + "%'";
        dbConnection.getConnection().query(sql, function (err, rows, fields) {
            if (err)
                res.send(err);
            res.json(rows);
        })
    }
};

module.exports = Reservation_CRUD;