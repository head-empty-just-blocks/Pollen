const Sequelize = require('sequelize')
const db = require('../db')

const Project = db.define('project', {
  title: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {
      notEmpty: true,
    },
  },
  description: {
    type: Sequelize.TEXT,
    allowNull: false,
    validate: {
      notEmpty: true,
    },
  },
  startDate: {
    type: Sequelize.DATE,
  },
  endDate: {
    type: Sequelize.DATE,
  },
  goalAmount: {
    type: Sequelize.DECIMAL(10, 2),
    allowNull: false,
    validate: {
      min: 0.01,
    },
  },
  currentAmount: {
    type: Sequelize.DECIMAL(10, 2),
    allowNull: false,
    defaultValue: 0,
  },
})

module.exports = Project

Project.collectDonation = async (projectId, donation) => {
  try {
    const project = await Project.findByPk(projectId)
    console.log('\n old amount:', project.currentAmount)
    project.currentAmount = parseInt(project.currentAmount) + parseInt(donation)
    await project.save()
    console.log('new amount:', project.currentAmount, '\n')
  } catch (error) {
    console.error(error)
  }
}
