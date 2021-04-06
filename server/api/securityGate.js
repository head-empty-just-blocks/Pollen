// route middleware to make sure a user is logged in
const isLoggedIn = (req, res, next) => {
  if (req.user && req.body.userId === req.user.id) {
    next()
  } else {
    res.sendStatus(403)
  }
}

// route middleware to make sure a user is logged in
// if user is authenticated in the session, carry on
// if they aren't redirect them to the home page??? now send message

const isYourself = (req, res, next) => {
  if (+req.params.id === req.user.id) {
    next()
  } else {
    res.status(403).send('you don\'t have access to this user')
  }
}

module.exports = {
  isYourself,
  isLoggedIn,
}
