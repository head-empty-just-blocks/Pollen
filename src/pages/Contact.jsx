import React from 'react'
import {Footer} from './index'
import {makeStyles} from '@material-ui/core/styles'
import Container from '@material-ui/core/Container'

const useStyles = makeStyles((theme) => ({
  contactContainer: {
    width: '100%',
    height: '100vh',
    backgroundColor: theme.palette.primary.main,
  },
  formContainer: {
    backgroundColor: theme.palette.primary.main,
    height: '100vh',
    width: '100vw',
    justifyContent: 'center',
    display: 'flex',
  },
  paper: {
    paddingTop: '2em',
    width: '400px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  form: {
    width: '100%',
  },
}))
export const useFormControls = () => {
  const handleFormSubmit = async (e) => {
    e.preventDefault()
    await alert('Thanks!')
  }
  return {
    handleFormSubmit,
  }
}

const ContactForm = () => {
  const classes = useStyles()
  const {handleFormSubmit} = useFormControls()
  return (
    <div className={classes.contactContainer}>
      <Container
        className={classes.formContainer}
        maxWidth={false}
        style={{maxHeight: '70vh', overflow: 'scroll'}}
      >
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            padding: 20,
          }}
        >
          <div className={classes.paper}>
            <p className={'pixel-font'} style={{fontSize: '1.5em'}}>
              Contact
            </p>
            <form
              onSubmit={handleFormSubmit}
              className={classes.form}
              noValidate
            >
              <div className="nes-field">
                <label htmlFor={'name'} className={'pixel-font'}>
                  {'Name'}
                </label>
                <input
                  type={'text'}
                  required
                  id={'name'}
                  name={'name'}
                  className="nes-input"
                />
              </div>
              <div className="nes-field">
                <label htmlFor={'email'} className={'pixel-font'}>
                  {'E-mail'}
                </label>
                <input
                  type={'email'}
                  required
                  id={'email'}
                  name={'email'}
                  className="nes-input"
                />
              </div>
              <div className="nes-field">
                <label htmlFor={'message'} className={'pixel-font'}>
                  {'Message'}
                </label>
                <input
                  type={'text'}
                  required
                  id={'message'}
                  name={'message'}
                  className="nes-input"
                  multiline
                  rows={10}
                />
              </div>
              <div>
                <a
                  type="submit"
                  variant="contained"
                  className={'nes-btn pixel-font'}
                  color="primary"
                  style={{margin: '2rem 2rem 2rem 2rem'}}
                >
                  Submit
                </a>
              </div>
            </form>
          </div>
          <Footer />
        </div>
      </Container>
    </div>
  )
}

export default ContactForm
