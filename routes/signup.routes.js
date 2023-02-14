const express = require('express');
const router = express.Router();
const bcrypt = require('bcrypt')
const User = require('../models/User.model')

router.get("/", (req, res, next) => {
    res.render("index");
  });

router.get("/signup", (req, res, next) => {
    res.render("auth/signup");
  });

router.post('/signup', async (req, res) => {
    const body = { ...req.body }
  
    if (body.password.length < 6) {
      res.render('auth/signup', { errorMessage: 'Password too short', body: req.body })
    } else {
      const salt = bcrypt.genSaltSync(13)
      const passwordHash = bcrypt.hashSync(body.password, salt)
      console.log(passwordHash)
  
      delete body.password
      body.passwordHash = passwordHash
  
      try {
        const user = await User.create(body)
        const tempUser = {
          username: user.username,
          email: user.email,
        }

        req.session.user = tempUser
        res.redirect('/profile')
      } catch (error) {
        if (error.code === 11000) {
          console.log('Duplicate !')
          res.render('auth/signup', {
            errorMessage: 'Username already used !',
            userData: req.body,
          })
        } else {
          res.render('auth/signup', {
            errorMessage: error,
            userData: req.body,
          })
        }
      }
    }
  });


  
  module.exports = router;