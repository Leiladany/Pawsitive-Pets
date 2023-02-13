router.get('/login', (req, res) => {
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