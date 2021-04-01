import React, {useState} from 'react'
import {useInput, transformDate} from './OrgSettings/hooks'
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
    const now = new Date(Date.now())
    let nowStr = transformDate(now, 'string')
    console.log({nowStr, endDate})
    if (nowStr > endDate) {
      setWarning('End date cannot be before today')
    } else if (startDate > endDate) {
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
        <label>Title</label>
        <input required name="Title" {...bindTitle} />
        <label>Description</label>
        <textarea name="Description" {...bindDescription} />
        <div>
          <label>Start Date</label>
          <input
            type="date"
            name="startDate"
            value={startDate}
            {...bindStartDate}
          />
          <label>End Date</label>
          <input type="date" name="endDate" value={endDate} {...bindEndDate} />
        </div>
        <label>Goal Amount</label>
        <input
          type="number"
          name="goalAmount"
          value={goalAmount}
          {...bindGoalAmount}
        />
        <div className="warning">{warning}</div>
        <button type="submit">Create Project</button>
      </form>
    </div>
  )
}

const mapDispatch = (dispatch) => ({
  createProject: (orgId, project) => dispatch(postProject(orgId, project)),
})

export default connect(null, mapDispatch)(AddProjectForm)
