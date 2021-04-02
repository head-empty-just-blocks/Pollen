import React, {useState} from 'react'
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'
import Paper from '@material-ui/core/Paper'
import {makeStyles} from '@material-ui/core/styles'

const useStyles = makeStyles((theme) => ({
  '@global': {
    ul: {
      margin: 0,
      padding: 0,
      listStyle: 'none',
    },
  },
  paper: {
    marginTop: theme.spacing(8),
    marginLeft: theme.spacing(8),
    marginRight: theme.spacing(8),
    paddingLeft: theme.spacing(4),
    paddingRight: theme.spacing(4),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  form: {
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}))

const defaultState = {
  fullName: '',
  email: '',
  message: '',
  formSubmitted: false,
  success: false,
}

export const useFormControls = () => {
  const [values, setValues] = useState(defaultState)
  // error handling
  const [errors, setErrors] = useState(false)
  //form validation
  const validate = (fieldValues) => {
    let temp = {...errors}

    if ('fullName' in fieldValues)
      temp.fullName = fieldValues.fullName ? '' : 'This field is required.'

    if ('email' in fieldValues) {
      temp.email = fieldValues.email ? '' : 'This field is required.'
      if (fieldValues.email)
        temp.email = /^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(fieldValues.email)
          ? ''
          : 'Email is not valid.'
    }

    if ('message' in fieldValues)
      temp.message = fieldValues.message ? '' : 'This field is required.'

    setErrors({
      ...temp,
    })
  }
  const handleInputValue = (e) => {
    const {name, value} = e.target
    setValues({
      ...values,
      [name]: value,
    })
    validate({[name]: value})
  }
  const handleFormSubmit = async (e) => {
    e.preventDefault()
    if (formIsValid()) {
      await alert('Thanks!')
    }
  }
  const formIsValid = (fieldValues = values) => {
    const isValid =
      fieldValues.fullName &&
      fieldValues.email &&
      fieldValues.message &&
      Object.values(errors).every((x) => x === '')

    return isValid
  }
  return {
    handleInputValue,
    handleFormSubmit,
    formIsValid,
    errors,
  }
}

const inputFieldValues = [
  {
    name: 'fullName',
    label: 'Full Name',
    id: 'my-name',
  },
  {
    name: 'email',
    label: 'Email',
    id: 'my-email',
  },
  {
    name: 'message',
    label: 'Message',
    id: 'my-message',
    multiline: true,
    rows: 10,
  },
]

const ContactForm = () => {
  const classes = useStyles()
  const {
    handleInputValue,
    handleFormSubmit,
    formIsValid,
    errors,
  } = useFormControls()
  return (
    <Paper className={classes.paper}>
      <form className={classes.form} onSubmit={handleFormSubmit}>
        {inputFieldValues.map((inputFieldValue, index) => {
          return (
            <TextField
              key={index}
              onBlur={handleInputValue}
              onChange={handleInputValue}
              name={inputFieldValue.name}
              label={inputFieldValue.label}
              multiline={inputFieldValue.multiline}
              rows={inputFieldValue.rows}
              autoComplete="none"
              {...(errors[inputFieldValue.name] && {
                error: true,
                helperText: errors[inputFieldValue.name],
              })}
            />
          )
        })}
        <Button
          className={classes.submit}
          type="submit"
          disabled={!formIsValid()}
        >
          Send Message
        </Button>
      </form>
    </Paper>
  )
}

export default ContactForm
