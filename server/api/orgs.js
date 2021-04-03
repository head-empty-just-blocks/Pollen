const router = require('express').Router()
const {Organization, User, Project} = require('../db/models')
module.exports = router

// fetches all organizations
router.get('/', async (req, res, next) => {
  try {
    const orgs = await Organization.findAll({
      attributes: [
        'id',
        'name',
        'email',
        'address',
        'latitude',
        'longitude',
        'description',
        'imageUrl',
      ],
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
      attributes: [
        'id',
        'name',
        'email',
        'address',
        'latitude',
        'longitude',
        'description',
        'imageUrl',
      ],
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
      userId,
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
      let user = await User.findByPk(userId)
      user.isFlower = true
      user.organizationId = org.id
      await user.save()
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

router.get('/:orgId/projects', async (req, res, next) => {
  try {
    const projects = await Project.findAll({
      attributes: [
        'title',
        'description',
        'startDate',
        'endDate',
        'goalAmount',
        'currentAmount',
      ],
      where: {
        organizationId: req.params.orgId,
      },
    })
    res.json(projects)
  } catch (err) {
    next(err)
  }
})

// create a new project with columns filled in front end
router.post('/:orgId/projects', async (req, res, next) => {
  try {
    const project = await Project.findOrCreate({
      where: {
        title: req.body.title,
      },
    })
    project.description = req.body.description
    project.startDate = req.body.startDate
    project.endDate = req.body.endDate
    project.goalAmount = req.body.goalAmount
    project.currentAmount = req.body.currentAmount
    await project.save()
    res.sendStatus(201)
  } catch (error) {
    next(error)
  }
})

// change the currentAmount of a specified project by the amount of donation
router.put('/:orgId/projects/:projectId/donate', async (req, res, next) => {
  try {
    const project = await Project.findByPk(req.params.projectId)
    project.collectDonation(req.body.donation)
    res.status(200).send(project)
  } catch (error) {
    next(error)
  }
})
