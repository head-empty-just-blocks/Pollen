import React from 'react'
import {useInput} from './OrgSettings/hooks'
import {connect} from 'react-redux'
import {postNewOrg} from '../store/singleOrg'

const AddOrg = ({user, postNewOrg, history}) => {
  const {value: name, bind: bindName} = useInput('')
  const {value: email, bind: bindEmail} = useInput('')
  const {value: description, bind: bindDescription} = useInput('')
  const {value: address, bind: bindAddress} = useInput('')
  //const [warning, setWarning] = useState('')

  function handleSubmit(e) {
    e.preventDefault()
    let userId = user.id
    postNewOrg({name, email, description, address, userId})
    history.push('/account')
  }

  return (
    <div>
      <h1 className="create-project">Add Your Organization to the Garden!</h1>
      <form onSubmit={handleSubmit} className="projectForm">
        <div className="project-form">
          <label>Name</label>
          <input required name="name" value={name} {...bindName} />
        </div>
        <div className="project-form">
          <label>Email</label>
          <input type="email" name="email" value={email} {...bindEmail} />
        </div>
        <div className="project-form">
          <label>Description</label>
          <textarea
            name="Description"
            value={description}
            {...bindDescription}
          />
        </div>
        <div className="project-form">
          <label>Address</label>
          <input type="text" name="address" value={address} {...bindAddress} />
        </div>
        {/* <div className="warning project-form">{warning}</div> */}
        <button type="submit" className="project-form">
          Signup My Organization
        </button>
      </form>
    </div>
  )
}

const mapState = (state) => ({
  user: state.user,
})

const mapDispatch = (dispatch) => ({
  postNewOrg: (org) => dispatch(postNewOrg(org)),
})

export default connect(mapState, mapDispatch)(AddOrg)
