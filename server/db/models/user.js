const Sequelize = require('sequelize')
const db = require('../db')

const User = db.define('user', {
	firstName: {
		type: Sequelize.STRING,
		allowNull: false,
		validate: {
			notEmpty: true,
		},
	},
	lastName: {
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
	googleId: {
		type: Sequelize.STRING,
	},
	isFlower: {
		type: Sequelize.BOOLEAN,
		defaultValue: false,
	},
})

module.exports = User
