import React from 'react'
import PropTypes from 'prop-types'
const Card = ({name,salary,state}) => {
  return (
    <div>
        <p>Name : {name}</p>
        <p>Salary: {salary}</p>
        <p>State: {state}</p>
    </div>
  )
}

Card.PropTypes={
  name:PropTypes.string,
  salary:PropTypes.number,
  state:PropTypes.string
}
export default Card
