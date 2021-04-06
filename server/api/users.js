const router = require('express').Router()
const {User} = require('../db/models')
module.exports = router

const {isYourself} = require('./securityGate')

router.get('/:id', isYourself, async (req, res, next) => {
  try {
    const user = await User.findByPk(req.params.id)
    res.send(user)
  } catch (err) {
    next(err)
  }
})
