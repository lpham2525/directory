import React from 'react'

// const employees = [{
//   id: 1,
//   first_name: 'Barnaby',
//   last_name: 'Seabright',
//   email: 'bseabright0@cnet.com',
//   Job_Title: 'Technical Writer'
// }, {
//   id: 2,
//   first_name: 'Marlene',
//   last_name: 'Margrie',
//   email: 'mmargrie1@admin.ch',
//   Job_Title: 'Associate Professor'
// }, {
//   id: 3,
//   first_name: 'Jeffie',
//   last_name: 'Auletta',
//   email: 'jauletta2@cloudflare.com',
//   Job_Title: 'Compensation Analyst'
// }, {
//   id: 4,
//   first_name: 'Jaimie',
//   last_name: 'Quilty',
//   email: 'jquilty3@rambler.ru',
//   Job_Title: 'VP Accounting'
// }, {
//   id: 5,
//   first_name: 'Elysia',
//   last_name: 'Denniss',
//   email: 'edenniss4@earthlink.net',
//   Job_Title: 'Actuary'
// }, {
//   id: 6,
//   first_name: 'Pauletta',
//   last_name: 'Grelak',
//   email: 'pgrelak5@issuu.com',
//   Job_Title: 'Recruiter'
// }, {
//   id: 7,
//   first_name: 'Irving',
//   last_name: 'Node',
//   email: 'inode6@techcrunch.com',
//   Job_Title: 'Recruiter'
// }, {
//   id: 8,
//   first_name: 'Paige',
//   last_name: 'Deroche',
//   email: 'pderoche7@time.com',
//     Job_Title: 'Product Engineer'
// }, {
//   id: 9,
//   first_name: 'Candis',
//   last_name: 'Cadogan',
//   email: 'ccadogan8@bbb.org',
//     Job_Title: 'Clinical Specialist'
// }, {
//   id: 10,
//   first_name: 'Karalee',
//   last_name: 'Tregidga',
//   email: 'ktregidga9@nifty.com',
//   Job_Title: 'VP Marketing'
// }]

const Employee = props => {
  console.log('employees props = ', props)

  return (
    <ul>
      {props.employees.map(employee =>
        <li key={employee.id}>{employee.first_name} {employee.last_name}
          <br />
          {employee.email}
          <br />
          {employee.Job_Title}
        </li>
      )}
    </ul>
  )
}

// const Employee = props => {
//   console.log('employees props = ', props)
//   return (
//     <ul>
//       <div>
//         <li>{employee.first_name} {employee.last_name}</li>
//         <p>{employee.email}</p>
//         <p>{employee.Job_Title}</p>
//       </div>
//     </ul>
//   )
// }

export default Employee
