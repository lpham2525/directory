import React, { Component } from 'react'
import './App.css'
import Employee from './components/Employee'
const employees = [{
  id: 1,
  first_name: 'Barnaby',
  last_name: 'Seabright',
  email: 'bseabright0@cnet.com',
  Job_Title: 'Jedi Master'
}, {
  id: 2,
  first_name: 'Marlene',
  last_name: 'Margrie',
  email: 'mmargrie1@admin.ch',
  Job_Title: 'Jedi Master'
}, {
  id: 3,
  first_name: 'Jeffie',
  last_name: 'Auletta',
  email: 'jauletta2@cloudflare.com',
  Job_Title: 'Padawan'
}, {
  id: 4,
  first_name: 'Jaimie',
  last_name: 'Quilty',
  email: 'jquilty3@rambler.ru',
  Job_Title: 'Jedi Master'
}, {
  id: 5,
  first_name: 'Elysia',
  last_name: 'Denniss',
  email: 'edenniss4@earthlink.net',
  Job_Title: 'Padawan'
}, {
  id: 6,
  first_name: 'Pauletta',
  last_name: 'Grelak',
  email: 'pgrelak5@issuu.com',
  Job_Title: 'Jedi Master'
}, {
  id: 7,
  first_name: 'Irving',
  last_name: 'Node',
  email: 'inode6@techcrunch.com',
  Job_Title: 'Padawan'
}, {
  id: 8,
  first_name: 'Paige',
  last_name: 'Deroche',
  email: 'pderoche7@time.com',
  Job_Title: 'Padawan'
}, {
  id: 9,
  first_name: 'Candis',
  last_name: 'Cadogan',
  email: 'ccadogan8@bbb.org',
  Job_Title: 'Padawan'
}, {
  id: 10,
  first_name: 'Karalee',
  last_name: 'Tregidga',
  email: 'ktregidga9@nifty.com',
  Job_Title: 'Jedi Master'
}]

class App extends Component {
  state = {
    employees: employees
  }
  
  handleSort = () =>{
    let sorted = this.state.employees.sort((a, b) => {
      // let textA = a.last_name
      // let textB = b.last_name
      if(a.last_name < b.last_name) { return -1 }
      if (a.last_name > b.last_name) { return 1 }
    })
    }

    handleJobTitle= () => {
      let jobTitle = this.state.employees.sort((a,b) =>{
        let master = a.Job_Title.value
        let padawan = b.Job_Title.value
      })
    }

  render () {
    return (
      <>
      <div className='col=md=6'>
        <p>
        <button onClick={this.handleSort} className="btn btn-primary">Sort by last name</button>
        </p>
        <p>
        <button onClick={this.handleJobTitle} className="btn btn-success">Sort by job title</button>
        </p>
      </div>
      <div className='col=md=6'>
        <Employee
        employees={this.state.employees} />
      </div>
      </>
    )
  }
}

export default App
