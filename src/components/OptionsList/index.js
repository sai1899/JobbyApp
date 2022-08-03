import './index.css'

const OptionsList = props => {
  const {firstEachList} = props
  const {label, employmentTypeId} = firstEachList

  const salaryRangeChanged = id => {
    console.log(id)
  }

  const getDisplayTypeEmployment = () => {
    console.log('hello')
    return (
      <ul className="type_employment_ul">
        <hr className="hr_style" />
        <h4>Type of Employment</h4>
        {firstEachList.map(eachItem => {
          const {empTypeGotFunction} = props
          const onTypeChanged = event => {
            console.log('in type changed')
            empTypeGotFunction(event.target.value)
          }
          return (
            <li className="employement_type_checkbox" onChange={onTypeChanged}>
              <input
                type="checkbox"
                id={eachItem.employmentTypeId}
                className="type_employment_label"
                value={eachItem.employmentTypeId}
              />
              <label htmlFor={eachItem.employmentTypeId}>
                {eachItem.label}
              </label>
            </li>
          )
        })}
        <hr className="hr_style1" />
      </ul>
    )
  }

  const getDisplaySalaryRange = () => {
    const {secondEachList} = props
    console.log(secondEachList)

    return (
      <ul className="type_employment_ul">
        <h4>Salary Range</h4>
        {secondEachList.map(eachItem => {
          console.log('hello')
          const onSalaryRangeChanged = () => {
            const {salaryRangeGotFunction} = props
            salaryRangeGotFunction(eachItem.salaryRangeId)
          }
          return (
            <li
              className="employement_type_checkbox"
              key={eachItem.salaryRangeId}
              onClick={onSalaryRangeChanged}
            >
              <input
                type="radio"
                id={eachItem.salaryRangeId}
                className="type_employment_label"
                name="salary"
              />
              <label htmlFor={eachItem.salaryRangeId}>{eachItem.label}</label>
            </li>
          )
        })}
        <hr className="hr_style1" />
      </ul>
    )
  }

  return (
    <div>
      {/* {getDisplayTypeEmployment()} */}
      {getDisplaySalaryRange()}
    </div>
  )
}

export default OptionsList
