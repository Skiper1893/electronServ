var express = require('express');
var router = express.Router();
var controllers = require('../controllers/index')

router.get('/get-users', (req, res) =>{
    controllers.send.getUsers(req, res);
});

router.post('/reg-user', (req, res) =>{
    controllers.send.registerUser(req, res);
});

router.post('/set-points', (req, res) =>{
    controllers.send.setPoints(req, res);
});

module.exports = router;
