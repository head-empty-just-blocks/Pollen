import React, {useState} from 'react'
import {useInput} from './OrgSettings/hooks'
import {connect} from 'react-redux'
import {postNewOrg} from '../store/singleOrg'

const AddOrg = ({user, error, postNewOrg, history}) => {
  const {value: name, bind: bindName} = useInput('')
  const {value: email, bind: bindEmail} = useInput('')
  const {value: description, bind: bindDescription} = useInput('')
  const {value: address, bind: bindAddress} = useInput('')
  const [warning, setWarning] = useState('')

  function handleSubmit(e) {
    e.preventDefault()
    let userId = user.id
    if (error) {
      setWarning(error.message)
    } else {
      postNewOrg({name, email, description, address, userId})
      history.push('/account')
    }
  }

  return (
    <div>
      <h1 className="form-title">Add Your Organization to the Garden!</h1>
      <form onSubmit={handleSubmit} className="form-container">
        <div className="input-container">
          <label>Name</label>
          <input required name="name" value={name} {...bindName} />
        </div>
        <div className="input-container">
          <label>Email</label>
          <input type="email" name="email" value={email} {...bindEmail} />
        </div>
        <div className="input-container">
          <label>Description</label>
          <textarea
            name="Description"
            value={description}
            {...bindDescription}
          />
        </div>
        <div className="input-container">
          <label>Address</label>
          <input type="text" name="address" value={address} {...bindAddress} />
        </div>
        <div className="warning input-container">{warning}</div>
        <button type="submit">Signup My Organization</button>
      </form>
    </div>
  )
}

const mapState = (state) => ({
  user: state.user,
  error: state.errorStore,
})

const mapDispatch = (dispatch) => ({
  postNewOrg: (org) => dispatch(postNewOrg(org)),
})

export default connect(mapState, mapDispatch)(AddOrg)
