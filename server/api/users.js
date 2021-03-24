const router = require('express').Router()
const {User} = require('../db/models')
module.exports = router

router.get('/', async (req, res, next) => {
  try {
    const orgs = await User.findOne({
      attributes: ['firstName', 'lastName', 'email'],
      where: {
        googleId: req.body.googleId,
      },
    })
    res.json(orgs)
  } catch (err) {
    next(err)
  }
})
