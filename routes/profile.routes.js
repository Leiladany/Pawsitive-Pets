const express = require('express')
const { isLoggedIn } = require('../middleware/route-guard')
const router = express.Router()
const Pet = require('../models/Pet.model')
const User = require('../models/User.model')


router.get('/', isLoggedIn, (req, res) => {
    res.render('profile', { user: req.session.user })
  })

  router.get('/create', async (req, res, next) => {
    const body = req.body
    console.log(body + "🐶🐶🐶🐶🐶🐶🐶🐶🐶🐶🐶🐶🐶🐶")
    
    const createPet = await Pet.create({
      ...body,
      petamount: body.petamount,
      petname: body.petname,
      petsort: body.petsort,
      petbreed: body.petbreed,
      petbirth: body.petbirth,
      petsex: body.petsex,
      petcolor: body.petcolor,
      pethair: body.pethair,
      petvaccines: body.petvaccines
      //missing petpicture
    })
    res.redirect('/')
  })


//! Pet.create({...req.body, owner: currentUser._id})
//!Pet.find({owner: currentUser._id})


  module.exports = router 
