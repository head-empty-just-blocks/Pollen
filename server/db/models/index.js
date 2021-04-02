const Organization = require('./Organization')
const Project = require('./Project')
const User = require('./User')

Organization.hasMany(Project)
Project.belongsTo(Organization)

User.belongsTo(Organization)
Organization.hasOne(User)

module.exports = {Organization, Project, User}
