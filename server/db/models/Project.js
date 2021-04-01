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

Project.prototype.collectDonation = async (donation) => {
  this.goalAmount += donation
  await this.save()
}
