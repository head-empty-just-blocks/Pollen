const Sequelize = require('sequelize')
const pkg = require('../../package.json')

const databaseName = pkg.name

let db

if (process.env.DATABASE_URL) {
  db = new Sequelize(process.env.DATABASE_URL, {
    logging: false,
    dialect: 'postgres',
    ssl: true,
    dialectOptions: {
      ssl: true,
      rejectUnauthorized: false,
    },
  })
} else {
  db = new Sequelize(`postgres://localhost:5432/${databaseName}`, {
    logging: false,
  })
}
module.exports = db
