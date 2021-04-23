import React from 'react'
import {FormControl, InputLabel, Input, Button} from '@material-ui/core'
import {Footer} from './index'

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
  const {handleFormSubmit} = useFormControls()
  return (
    <div>
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          margin: 20,
          padding: 20,
        }}
      >
        <form style={{width: '50%'}} onSubmit={handleFormSubmit}>
          <h1>Contact</h1>

          <FormControl margin="normal" fullWidth>
            <InputLabel htmlFor="name">Name</InputLabel>
            <Input id="name" type="text" />
          </FormControl>

          <FormControl margin="normal" fullWidth>
            <InputLabel htmlFor="email">Email</InputLabel>
            <Input id="email" type="email" />
          </FormControl>

          <FormControl margin="normal" fullWidth>
            <InputLabel htmlFor="email">Message</InputLabel>
            <Input id="email" multiline rows={10} />
          </FormControl>

          <Button variant="contained" color="primary" size="medium">
            Send
          </Button>
        </form>
      </div>
      <Footer />
    </div>
  )
}

export default ContactForm
