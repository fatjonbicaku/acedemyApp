const User = require('../models/user.model');

module.exports.createUser = (req, res) => {
    User.create(req.body)
      .then(user => {
        res.status(200).json({ message: "User is created succesfully.", user: user })
      })
      .catch(err => {
        res.status(400).json({ message: err.errors})
      })
  }
  
  module.exports.findAllUsers = (req, res) => {
    User.find().sort({ createdAt: -1 })
      .then(users => {
        res.status(200).json({ users: users })
      })
      .catch(err => {
        res.status(400).json(err)
      })
  }
  
  module.exports.findOneUser = (req, res) => {
    User.findOne({ _id: req.params.id })
      .then(user => {
        if (!user) {
          return res.status(200).json({ message: "Cant find user requested or it does not exist" })
        }
        res.status(200).json(user)
      })
      .catch(err => {
        res.status(400).json({ message: "Cant find User requested or it does not exist" })
      })
  }
  
  module.exports.editOneUser = (req, res) => {
    User.findByIdAndUpdate({ _id: req.params.id }, req.body, { new: true, runValidators: true })
      .then(user => {
        res.status(200).json({ message: "User is updated sucessfully.", user })
      })
      .catch(err => {
        if (err.name == "CastError") {
          return res.status(400).json({ message: 'User requested does not exist.' })
        }
        res.status(400).json({ message: err.errors })
  
      }
  
      )
  }
  
  module.exports.deleteUser = (req, res) => {
    User.deleteOne({ _id: req.params.id })
      .then(() => {
        res.status(200).json({ message: "User deleted succesfully." })
      })
      .catch(err => {
        if (err.name == "CastError") {
          res.status(400).json({ message: 'User requested does not exist.' })
        }
      })
  }
