const Sequelize = require('sequelize')
const db = require('../db')

const Organization = db.define('organization', {
  name: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {
      notEmpty: true,
    },
  },
  email: {
    type: Sequelize.STRING,
    unique: true,
    allowNull: false,
    validate: {
      isEmail: true,
      notEmpty: true,
    },
  },
  address: {
    type: Sequelize.TEXT,
    unique: true,
    allowNull: false,
    validate: {
      notEmpty: true,
    },
  },
  latitude: {
    type: Sequelize.DECIMAL(10, 4),
    allowNull: false,
  },
  longitude: {
    type: Sequelize.DECIMAL(10, 4),
    allowNull: false,
  },
  description: {
    type: Sequelize.TEXT,
    allowNull: false,
    validate: {
      notEmpty: true,
    },
  },
  imageUrl: {
    type: Sequelize.TEXT,
    defaultValue: 'mainpublicassetsmarigold.jpg',
  },
})

module.exports = Organization
