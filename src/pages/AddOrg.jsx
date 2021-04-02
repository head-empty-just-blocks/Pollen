import React from 'react'
import {useInput} from './OrgSettings/hooks'
import {connect} from 'react-redux'
import {postNewOrg} from '../store/singleOrg'

const AddOrg = () => {
  const {value: name, bind: bindName} = useInput('')
  const {value: email, bind: bindEmail} = useInput('')
  const {value: description, bind: bindDescription} = useInput('')
  const {value: address, bind: bindAddress} = useInput('')
  //const [warning, setWarning] = useState('')

  function handleSubmit(e) {
    e.preventDefault()
    //grab form info and post
    postNewOrg({name, email, description, address})
    //take you to google oauth
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

const mapDispatch = (dispatch) => ({
  postNewOrg: (org) => dispatch(postNewOrg(org)),
})

export default connect(null, mapDispatch)(AddOrg)
