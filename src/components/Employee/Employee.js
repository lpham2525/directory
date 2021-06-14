import React from 'react'

const Employee = props => {
  console.log('employees props = ', props)
  return (
    <>
      <table className="table table-dark table-striped table-hover">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">First Name</th>
            <th scope="col">Last Name</th>
            <th scope="col">Email</th>
            <th scope="col">Class</th>
            <th scope="col">Home World</th>
          </tr>
        </thead>
        <tbody>
    {props.employees.map(employee =>
      <>
        <tr>
                <td>{employee.id}</td>
                <td>{employee.first_name}</td>
                <td>{employee.last_name}</td>
                <td>{employee.email}</td>
                <td>{employee.Job_Title}</td>
                <td>{employee.home_world}</td>
              </tr>
        </>
    )}
            </tbody>
          </table>
        </>
  )
}

export default Employee
