import React from 'react'
import {connect} from 'react-redux'
//import {generateErrorMessage} from '../utils/functions'
import {postNewOrg} from '../store/singleOrg'

export const AddOrgForm = (props) => {
  const addFormButton = () => {
    let org = {
      name: 'A',
      email: '2@lala.com',
      address: '761 Seneca Ave, Ridgewood NY 11385',
      latitude: '5',
      description: '5',
      imageUrl: 'ugh',
    }
    props.postNewOrg(org)
  }

  return (
    <div>
      <button onClick={() => addFormButton()}>ADD ORG</button>
    </div>
  )
}

const mapDispatchToProps = (dispatch) => {
  return {
    postNewOrg: (org) => dispatch(postNewOrg(org)),
  }
}

export default connect(null, mapDispatchToProps)(AddOrgForm)
