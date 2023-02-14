const express = require('express')
const { isLoggedIn } = require('../middleware/route-guard')
const router = express.Router()
const Info = require('../models/Info.model');

router.get('/', isLoggedIn, (req, res) => {
    
    res.render('profile', { user: req.session.user })
  })

  router.get('/profile/new', async (req, res, next) => {
    res.render('/profile', { update: false })
  })
  

//! Pet.create({...req.body, owner: currentUser._id})
//!Pet.find({owner: currentUser._id})













  module.exports = router 
