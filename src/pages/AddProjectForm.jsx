import React, {useState} from 'react'
import {useInput} from './OrgSettings/hooks'
import {connect} from 'react-redux'
import {postProject} from '../store/allProjects'

const AddProjectForm = ({match, createProject, errorStore}) => {
  const {value: title, bind: bindTitle} = useInput('')
  const {value: description, bind: bindDescription} = useInput('')
  const {value: startDate, bind: bindStartDate} = useInput('')
  const {value: endDate, bind: bindEndDate} = useInput('')
  const {value: goalAmount, bind: bindGoalAmount} = useInput('')
  const [warning, setWarning] = useState('')

  function handleSubmit(e) {
    e.preventDefault()
    setWarning('')
    const now = Date.now()
    const startDateMS = new Date(startDate)
    const endDateMS = new Date(endDate)

    if (now > endDateMS.getTime()) {
      setWarning('End date cannot be before today')
    } else if (startDateMS.getTime() > endDateMS.getTime()) {
      setWarning('End date of project must be after the start date')
    } else {
      const orgId = match.params.id
      createProject(orgId, {title, description, startDate, endDate, goalAmount})
    }
  }

  return (
    <div>
      <h1 className="form-title">Create Project</h1>
      <form onSubmit={handleSubmit} className="form-container">
        <div className="input-container">
          <label>Title</label>
          <input required name="Title" {...bindTitle} />
        </div>
        <div className="input-container">
          <label>Description</label>
          <textarea name="Description" {...bindDescription} />
        </div>
        <div className="input-container">
          <label>Start Date</label>
          <input
            type="date"
            name="startDate"
            value={startDate}
            {...bindStartDate}
          />
        </div>
        <div className="input-container">
          <label>End Date</label>
          <input type="date" name="endDate" value={endDate} {...bindEndDate} />
        </div>
        <div className="input-container">
          <label>Goal Amount</label>
          <input
            type="number"
            name="goalAmount"
            value={goalAmount}
            {...bindGoalAmount}
          />
        </div>
        <div className="warning input-container">{warning}</div>
        <div>{errorStore.message}</div>
        <button type="submit">Create Project</button>
      </form>
    </div>
  )
}

const mapState = (state) => ({
  errorStore: state.error,
})

const mapDispatch = (dispatch) => ({
  createProject: (orgId, project) => dispatch(postProject(orgId, project)),
})

export default connect(mapState, mapDispatch)(AddProjectForm)
