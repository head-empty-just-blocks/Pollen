import React, {useState} from 'react'
import {useInput} from './OrgSettings/hooks'
import {connect} from 'react-redux'
import {postProject} from '../store/allProjects'

const AddProjectForm = ({match, history, createProject}) => {
  const {value: title, bind: bindTitle} = useInput('')
  const {value: description, bind: bindDescription} = useInput('')
  const {value: startDate, bind: bindStartDate} = useInput('')
  const {value: endDate, bind: bindEndDate} = useInput('')
  const {value: goalAmount, bind: bindGoalAmount} = useInput('')
  const [warning, setWarning] = useState('')

  function handleSubmit(e) {
    e.preventDefault()
    const now = Date.now()
    const startDateMS = new Date(startDate)
    const endDateMS = new Date(endDate)

    if (now > endDateMS.getTime()) {
      setWarning('End date cannot be before today')
    } else if (startDateMS.getTime() > endDateMS.getTime()) {
      setWarning('End date of project must be after the start date')
    } else {
      console.log({title, description, startDate, endDate, goalAmount})
      const orgId = match.params.id
      createProject(orgId, {title, description, startDate, endDate, goalAmount})
      history.push('/account')
    }
  }

  return (
    <div>
      <h1 className="create-project">Create Project</h1>
      <form onSubmit={handleSubmit} className="projectForm">
        <div className="project-form">
          <label>Title</label>
          <input required name="Title" {...bindTitle} />
        </div>
        <div className="project-form">
          <label>Description</label>
          <textarea name="Description" {...bindDescription} />
        </div>
        <div className="project-form">
          <label>Start Date</label>
          <input
            type="date"
            name="startDate"
            value={startDate}
            {...bindStartDate}
          />
        </div>
        <div className="project-form">
          <label>End Date</label>
          <input type="date" name="endDate" value={endDate} {...bindEndDate} />
        </div>
        <div className="project-form">
          <label>Goal Amount</label>
          <input
            type="number"
            name="goalAmount"
            value={goalAmount}
            {...bindGoalAmount}
          />
        </div>
        <div className="warning project-form">{warning}</div>
        <button type="submit" className="project-form">
          Create Project
        </button>
      </form>
    </div>
  )
}

const mapDispatch = (dispatch) => ({
  createProject: (orgId, project) => dispatch(postProject(orgId, project)),
})

export default connect(null, mapDispatch)(AddProjectForm)
