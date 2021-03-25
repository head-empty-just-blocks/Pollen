const router = require('express').Router()
const {Organization} = require('../db/models')
module.exports = router

// fetches all organizations
router.get('/', async (req, res, next) => {
  try {
    const orgs = await Organization.findAll({
      attributes: ['id', 'name', 'email', 'address', 'description', 'imageUrl'],
    })
    res.json(orgs)
  } catch (err) {
    next(err)
  }
})

// fetch single organizaiton using its pk
router.get('/:orgId', async (req, res, next) => {
  try {
    const org = await Organization.findOne({
      where: {
        id: req.params.orgId,
      },
      attributes: ['id', 'name', 'email', 'address', 'description', 'imageUrl'],
    })
    res.json(org)
  } catch (error) {
    next(error)
  }
})

router.post('/', async (req, res, next) => {
  try {
    const {
      name,
      email,
      address,
      latitude,
      longitude,
      description,
      imageUrl,
    } = req.body
    let org = await Organization.findOne({
      where: {name},
    })
    if (!org) {
      org = await Organization.create({
        name,
        email,
        address,
        latitude,
        longitude,
        description,
        imageUrl,
      })
      res.send(org)
    } else {
      res.send('Organization already exists')
    }
  } catch (err) {
    if (err.name === 'SequelizeUniqueConstraintError') {
      res.status(401).send('Organization name is not unique')
    }
    next(err)
  }
})

router.use('/:orgId/projects', require('./projects'))
