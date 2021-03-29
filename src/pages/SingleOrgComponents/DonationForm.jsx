import React, {useState} from 'react'
import Button from '@material-ui/core/Button'
import Input from '@material-ui/core/Input'
import InputAdornment from '@material-ui/core/InputAdornment'

const DonationForm = () => {
  const [donation, setDonation] = useState(0)
  const [warning, setWarning] = useState('')

  const handleClick = (e) => {
    e.preventDefault()
    if (donation > 0) {
      setWarning('')
      console.log(`Donated $${donation}`)
      setDonation(0)
    } else setWarning('Donation amount must be greater than 0')
  }

  return (
    <form action="" className="donation">
      <Input
        id="standard-input-amount"
        value={donation}
        onChange={(e) => setDonation(e.target.value)}
        startAdornment={<InputAdornment position="start">$</InputAdornment>}
      />
      <Button
        variant="contained"
        color="primary"
        type="button"
        onClick={(e) => handleClick(e)}
      >
        Donate
      </Button>
      <br />
      <p className="warning">{warning}</p>
    </form>
  )
}

export default DonationForm
