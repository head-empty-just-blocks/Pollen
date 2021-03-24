const router = require('express').Router()
const {Project} = require('../db/models')
module.exports = router

// fetches all projects of a specified organization
router.get('/', async (req, res, next) => {
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
        organizationId: req.body.orgId,
      },
    })
    res.json(projects)
  } catch (err) {
    next(err)
  }
})

// create a new project with columns filled in front end
router.post('/', async (req, res, next) => {
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
router.put('/:id/donate', async (req, res, next) => {
  try {
    const project = await Project.findByPk(req.params.id)
    project.collectDonation(req.body.donation)
    res.status(200).send(project)
  } catch (error) {
    next(error)
  }
})
