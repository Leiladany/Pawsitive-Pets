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
      const allPets = await Pet.find()
      res.render('animals/mypets', { find: allPets })
    } catch (error) {
      console.log('Route to all recipes', error)
    }
  })

  router.get('/:recipeId', async (req, res) => {
    const recipeFound = await Recipe.findById(req.params.recipeId).populate('owner')
    console.log({ recipeFound })
    res.render('recipes/one', { recipeFound })
  })


  
//? Pet.find({owner: currentUser._id})


  module.exports = router