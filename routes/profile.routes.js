/*const express = require('express')
const { isLoggedIn } = require('../middleware/route-guard')
const router = express.Router()

router.get('/profile', isLoggedIn, (req, res) => {
    
    res.render('profile', { user: req.session.user })
  })
  
  module.exports = router 

*/

const express = require('express');
const router = express.Router();

router.get("/", (req, res, next) => {
    res.render("profile");
  });


module.exports = router;