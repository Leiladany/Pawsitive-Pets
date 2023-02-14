const express = require('express')
const bcrypt = require('bcrypt')
const User = require('../models/User.model')
const { isLoggedIn, isLoggedOut } = require('../middleware/route-guard')
const router = express.Router()

router.get('/login', isLoggedOut, (req, res) => {
  res.render('auth/login')
})

router.post('/login', async (req, res) => {
  const body = req.body

  const userMatch = await User.find({ username: body.username })
  // console.log(userMatch)
  if (userMatch.length) {
    // User found
    const user = userMatch[0]

    if (bcrypt.compareSync(body.password, user.passwordHash)) {
      // Correct password

      const tempUser = {
        username: user.username,
        email: user.email,
      }

      req.session.user = tempUser
      res.redirect('/profile')
    } else {
      // Incorrect password
    }
  } else {
    // User not found
  }
})

router.post('/logout', (req, res, next) => {
  req.session.destroy(err => {
    if (err) next(err);
    res.redirect('/');
  });
});
module.exports = router
