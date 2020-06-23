import React from 'react'

const Employee = props => {
  console.log('employees props = ', props)
    // < div class="card text-white bg-secondary mb-3" style = "max-width: 18rem;" >
    //   <div class="card-header">Header</div>
    //   <div class="card-body">
    //     <h5 class="card-title">Secondary card title</h5>
    //     <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    //   </div>
  return (
    <ul>
      {props.employees.map(employee =>
        <>
          <div className='card text-white bg-info mb-3' style={{ maxWidth: '18rem' }} key={employee.id}>
            <div className='card-header'>{employee.first_name} {employee.last_name}
            </div>
            <div className='card-body'>
              <p className='card-text'>
                {employee.email}
                <br />
                Rank: {employee.Job_Title}
              </p>
            </div>
          </div>
        </>
      )
    }
    </ul>
  )
}

export default Employee
