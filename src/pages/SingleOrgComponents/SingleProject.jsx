import React from 'react'

const SingleProject = (project) => {
  const convertDate = (date) => {
    let newDate = new Date(date)
    let num = newDate.getDate()
    let month = newDate.getMonth()
    let year = newDate.getFullYear()
    return `${month}/${num}/${year}`
  }
  return (
    <div className="singleProject">
      <h3>{project.title}</h3>
      <p>
        {convertDate(project.startDate)} - {convertDate(project.endDate)}
      </p>
      <p>
        Goal: ${project.currentAmount} / {project.goalAmount}
      </p>
      <p>{project.description}</p>
    </div>
  )
}

export default SingleProject
