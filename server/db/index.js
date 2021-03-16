const db = require('./db')

// register models
const {User, Organization, Project} = require('./models')

module.exports = {db, User, Organization, Project};
