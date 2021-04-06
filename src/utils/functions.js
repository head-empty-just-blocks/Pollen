export const generateErrorMessage = (errMessage) => {
  const types = [
    'firstName',
    'lastName',
    'email',
    'password',
    'confirmPassword',
  ]
  for (let nameType of types) {
    if (errMessage.includes('password')) {
      return 'Your password needs to have 6-20 characters!'
    } else if (errMessage.includes('confirmPassword')) {
      return 'Your password'
    } else if (errMessage.includes(nameType)) {
      nameType = nameType.replace(/(\w+)([A-Z]\w+)/g, '$1 $2')
      nameType = nameType[0].toLowerCase() + nameType.slice(1)
      if (errMessage.includes('notEmpty')) {
        return `Did you fill out the ${nameType}?`
      } else {
        return `Did you fill out ${nameType} correctly?`
      }
    }
  }
}
