import React from 'react'

const Card = (props) => {
  return (
    <div>
        <p>Name : {props.name}</p>
        <p>Salary: {props.salary}</p>
        <p>State: {props.state}</p>
    </div>
  )
}

export default Card