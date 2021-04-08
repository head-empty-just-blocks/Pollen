const router = require('express').Router()
const {User} = require('../db/models')
module.exports = router

const {isYourself} = require('./securityGate')

router.get('/:id', isYourself, async (req, res, next) => {
  try {
    const user = await User.findByPk(req.params.id)
    res.send(user)
  } catch (error) {
    next(error)
  }
})

router.put('/:id/donate', isYourself, async (req, res, next) => {
  try {
    const user = await User.findByPk(req.params.id)
    if (parseFloat(user.pollen) - parseFloat(req.body.donation) < 0) {
      res.status(402).send('Insufficient Funds')
    } else {
      user.pollen = parseFloat(user.pollen) - parseFloat(req.body.donation)
      await user.save()
      res.send(user)
    }
  } catch (error) {
    next(error)
  }
})
