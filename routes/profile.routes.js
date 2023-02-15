const express = require('express')
const { isLoggedIn } = require('../middleware/route-guard')
const router = express.Router()
const Pet = require('../models/Pet.model')
const User = require('../models/User.model')


router.get('/', isLoggedIn, (req, res) => {
    res.render('profile', { user: req.session.user })
  })



  router.get('/addpet', (req, res) => {
    res.render('animals/addpet')

  })
//create a new pet
  router.post('/addpet', async (req, res, next) => {
    const body = req.body    
    const createPet = await Pet.create({
      owner: req.session.user.id,
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

  router.get('/mypets', async (req, res) => {
    try {
      console.log(req.session.user)
      const allPets = await Pet.find({owner: req.session.user.id})

      res.render('animals/mypets', { mypets: allPets })
    } catch (error) {
      console.log('Route to all pets', error)
    }
  })

  router.get('/:mypetsId/details', async (req, res) => {
    const petFound = await Pet.findById(req.params.mypetsId).populate('owner')
    res.render('animals/one', { petFound })
  })

  router.get('/:mypetsId/edit', async (req, res) => {
    const petFound = await Pet.findById(req.params.mypetsId).populate('owner')
    res.render('animals/updatePet', { petFound })
  })

  router.post('/:mypetsId/delete', async (req, res) => {
    await Pet.findByIdAndDelete(req.params.mypetsId)
    res.redirect('/profile/mypets')
  })

  
  



  module.exports = router