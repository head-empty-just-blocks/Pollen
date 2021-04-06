import React, {useState} from 'react'
import Button from '@material-ui/core/Button'
import Input from '@material-ui/core/Input'
import InputAdornment from '@material-ui/core/InputAdornment'
import {connect} from 'react-redux'
import {donatePollenThunk} from '../../store/user'

const DonationForm = ({userId, donate, orgId, projectId, errorMessage}) => {
  const [donation, setDonation] = useState(0)
  const [warning, setWarning] = useState('')

  const handleClick = (e) => {
    e.preventDefault()
    if (donation > 0) {
      setWarning('')
      donate(userId, orgId, projectId, donation)
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
      <p className="warning">{errorMessage}</p>
    </form>
  )
}

const mapState = (state) => {
  console.log('errorStore:', state.error)
  return {
    userId: state.user.id,
    errorMessage: state.error.message,
    projects: state.allProjects,
  }
}

const mapDispatch = (dispatch) => ({
  donate: (userId, orgId, projectId, donation) =>
    dispatch(donatePollenThunk(userId, orgId, projectId, donation)),
})

export default connect(mapState, mapDispatch)(DonationForm)
