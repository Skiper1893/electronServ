const express = require('express');
const router = express.Router();

const app = express();

const {User} = require('../models/User');

function getUsers(req, res) {



    User.find().exec().then(function(result) {

        console.log(result);

            res.status(200).json({result: result});
    })
}

function registerUser(req, res) {

  let username = req.body.username;

   if (!req.body.username) {
    res.status(400).json({success: false, message: 'Please fill username field'});
  } else {
    let newUser = new User({
        username : username
    });

    newUser.save().then(() => {
            res.status(200).json({success: true, message: 'User successfully registered'});
          }).catch((e) => {
            res.status(400).json({success: false, message: 'Failed to register', error: e.message});
    });
  }
}

function setPoints(req,res) {

  let points = req.body.points;
  let user_id = req.body.id;

  User.findOneAndUpdate({_id : user_id},{$inc : {points: points}}).exec()
  .then(function(result) {
    console.log(result);
    return result;
  })
  .then(() => {
    res.status(200).json({success: true, message: 'Points was send'});
  })
  .catch((e) => {
    res.status(400).json({success: false, message: 'Failed to create', error: e.message});
    })
}

module.exports = {
    getUsers,
    registerUser,
    setPoints
}