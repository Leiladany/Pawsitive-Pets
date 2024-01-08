const express = require('express')
const { isLoggedIn } = require('../middleware/route-guard')
const router = express.Router()
const Pet = require('../models/Pet.model')
const User = require('../models/User.model')

// require fileUploader in order to use it 
const fileUploader = require('../config/cloudinary.config');


router.get('/', isLoggedIn, (req, res) => {
    res.render('profile', { user: req.session.user })
  })



  router.get('/addpet', (req, res) => {
    res.render('animals/addpet')

  })
//create a new pet
  router.post('/addpet', fileUploader.single('petpicture'), async (req, res, next) => {
  const body = req.body;
  console.log(req.file);

  const createPet = await Pet.create({
    owner: req.session.user.id,
    petname: body.petname,
    petsort: body.petsort,
    petbreed: body.petbreed,
    petbirth: body.petbirth,
    petgender: body.petgender,  // Assuming there's a field named petgender in your form
    petcolor: body.petcolor,
    pethair: body.pethair,
    petvaccines: body.petvaccines,
    petvaccinesdate: body.petvaccinesdate,
    petpicture: req.file.path,
  });

  res.redirect('/profile');
});

  router.get('/mypets', async (req, res) => {
    try {
      console.log(req.session.user)
      const allPets = await Pet.find({owner: req.session.user.id})

      res.render('animals/mypets', { mypets: allPets })
    } catch (error) {
      console.log('Route to all pets', error)
    }
  })

  // show 1 pet
  router.get('/:mypetsId/details', async (req, res) => {
    const petFound = await Pet.findById(req.params.mypetsId)
    res.render('animals/one', { petFound })
  })

  //  show pet & edit
  router.get('/:mypetsId/edit', async (req, res) => {
    const petFound = await Pet.findById(req.params.mypetsId).populate('owner')
    res.render('animals/updatePet', { petFound })
  })

  router.post('/:mypetsId/edit', fileUploader.single('movie-cover-image'), async (req, res) => {
    if (req.file){
      const newPet = {...req.body,
      petpicture: req.file.path,
    }
    await Pet.findByIdAndUpdate(req.params.mypetsId, newPet)
    res.redirect(`/profile/${req.params.mypetsId}/details`)
    
    }else{
    const petFound = await Pet.findByIdAndUpdate(req.params.mypetsId,req.body)
    res.redirect(`/profile/${req.params.mypetsId}/details`)
    }
  })




  router.post('/:mypetsId/delete', async (req, res) => {
    await Pet.findByIdAndDelete(req.params.mypetsId)
    res.redirect('/profile/mypets')
  })
  
  module.exports = router