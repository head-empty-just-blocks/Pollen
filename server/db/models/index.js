const Organization = require('./Organization')
const Project = require('./Project')
const User = require('./User')

Organization.hasMany(Project)
Project.belongsTo(Organization)

User.belongsToMany(Organization, {through: 'user-org'})
Organization.belongsToMany(User, {through: 'user-org'})

module.exports = {Organization, Project, User}
