router.get ('/login', isLoggedOut, (req, res) => {
    res.render ('auth/login', { user: undefined })
})

router.post('/login', isLoggedOut, async (req, res) => {
    try {
      const userMatch = await User.find({ username: req.body.username })
      if (userMatch.length) {
    
        const currentUser = userMatch[0]
        if (bcrypt.compareSync(req.body.password, currentUser.passwordHash)) {

          req.session.user = currentUser
          res.redirect('/auth/profile')
        } else {
          
          res.send('Incorrect password')
        }
      } else {
        
        res.send('User not found')
      }
    } catch (error) {
      console.log(error)
    }
  })

  hello