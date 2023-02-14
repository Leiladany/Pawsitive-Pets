const express = require('express')
const { isLoggedIn } = require('../middleware/route-guard')
const router = express.Router()
const Pet = require('../models/Pet.model')
const User = require('../models/User.model')


router.get('/', isLoggedIn, (req, res) => {
    res.render('profile', { user: req.session.user })
  })

  router.get('/create', (req, res) => {
    res.render('animals/create')

  })

  router.post('/create', async (req, res, next) => {
    const body = req.body
    console.log(req.body, "🐶🐶🐶🐶🐶🐶🐶🐶🐶🐶🐶🐶🐶🐶")
    
    const createPet = await Pet.create({
      petname: body.petname,
      petsort: body.petsort,
      petbreed: body.petbreed,
      petbirth: body.petbirth,
      petsex: body.petsex,
      petcolor: body.petcolor,
      pethair: body.pethair,
      petvaccines: body.petvaccines,
      petvaccinesdate: body.petvaccinesdate

      //missing petpicture
    })
    res.redirect('/profile')
  })

  router.get('/edit/:id', isLoggedIn, async (req, res) => {
    const pet = await Pet.findById(req.params.id)
    res.render('animals/edit', { pet })
  })

//? Pet.create({...req.body, owner: currentUser._id})
//? Pet.find({owner: currentUser._id})


  module.exports = router 
